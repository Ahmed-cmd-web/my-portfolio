/** @format */

import React from "react";
import Bio from "./Bio";
import Projects from "./Projects";
import Skills from "./Skills";

const Body = () => {
  return (
    <div className="w-full px-12 scroll-snap-y   ">
      <Bio />
      <Skills />
      <Projects />
    </div>
  );
};

export default Body;
