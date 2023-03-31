import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { HtmlBalls } from ".";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mobileMediaQuery = window.matchMedia("(max-width: 480px)");
    const tabletMediaQuery = window.matchMedia("(min-width: 481px) and (max-width: 830px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mobileMediaQuery.matches);
    setIsTablet(tabletMediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMobileMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    const handleTabletMediaQueryChange = (event) => {
      setIsTablet(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mobileMediaQuery.addEventListener("change", handleMobileMediaQueryChange);
    tabletMediaQuery.addEventListener("change", handleTabletMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileMediaQueryChange);
      tabletMediaQuery.removeEventListener("change", handleTabletMediaQueryChange);
    };
  }, []);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {(!isMobile && !isTablet) ? <BallCanvas icon={technology.icon} /> : <HtmlBalls icon={technology.icon}/>}
          
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);
