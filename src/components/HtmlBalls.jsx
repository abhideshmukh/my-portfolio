import React, { useEffect, useState } from "react";

const HtmlBalls = ({ icon }) => {
  return (
    <div className="avatar inline-block h-full w-full rounded-full ring-2 ring-black bg-white flex justify-center items-center">
        <img className="w-3/4 h-3/4" src={icon} alt="tech"/>
    </div>
  );
};

export default HtmlBalls;
