import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { LayerMaterial, Base, Depth, Fresnel } from 'lamina'
import CanvasLoader from "../Loader";

export default function AtomCanvas() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [20, -0.75, 0.75], fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <Flower base="#050779" colorA="#000000" colorB="#9681c4"/>
        <mesh>
          <sphereGeometry args={[0.25, 64, 64]} />
          <meshPhysicalMaterial depthWrite={false} transmission={1} thickness={10} roughness={0.65} />
        </mesh>
        <OrbitControls
          enableZoom={false}
        />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} color='#000000' />
        <ambientLight intensity={0.4} />
        {/* <Environment preset="warehouse" /> */}
      </Suspense>
    </Canvas>
  )
}

function Flower({ base, colorA, colorB }) {
  const mesh = useRef()
  const depth = useRef()
  useFrame((state, delta) => {
    let renderer = state.gl;
    let canvas = renderer.domElement;
    canvas.addEventListener("webglcontextlost", (event) => {
      console.log('lost');
      event.preventDefault();
      setTimeout(function () {
        renderer.forceContextRestore();
      }, 1);
    });
    canvas.addEventListener("webglcontextlost", (event) => {
      console.log('restored');
    });
    mesh.current.rotation.z += delta / 2
    depth.current.origin.set(-state.mouse.y, state.mouse.x, 0)
  })
  return (
    <mesh rotation-y={Math.PI / 2} scale={[2, 2, 2]} ref={mesh} dispose={null}>
      <torusKnotGeometry args={[0.4, 0.04, 200, 32, 3, 7]} dispose={null}/>
      <LayerMaterial>
        <Base color={base} alpha={1} mode="normal" />
        <Depth colorA={colorB} colorB={colorA} alpha={0.5} mode="normal" near={0} far={3} origin={[1, 1, 1]} />
        <Depth ref={depth} colorA={colorB} colorB="black" alpha={1} mode="lighten" near={0.25} far={2} origin={[1, 0, 0]} />
        <Fresnel mode="softlight" color="white" intensity={0.3} power={2} bias={0} />
      </LayerMaterial>
    </mesh>
  )
}
