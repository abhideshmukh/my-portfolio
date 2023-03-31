import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image
}) => {
  const [flipHorizontally, toggleFlip] = useState(false);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full  h-[340px] cursor-pointer'
        flipHorizontally={flipHorizontally}
      >
        <div className="h-full" onClick={() => toggleFlip(!flipHorizontally)}>
          {flipHorizontally || (<div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>)}

          <div>
            {flipHorizontally || <h3 className='text-white font-bold text-[24px] mt-8'>{name}</h3>}
            {!flipHorizontally || <p className='mt-2 text-[14px] font-normal' style={{transform: "scaleX(-1)"}}>{description}</p>}
          </div>

          {!flipHorizontally || (<div className='mt-4 flex flex-wrap gap-2 justify-end'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] font-semibold`}
                style={{transform: "scaleX(-1)"}}
              >
                #{tag.name}
              </p>
            ))}
          </div>)}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div> */}

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");