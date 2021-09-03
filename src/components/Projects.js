/** @format */

import React from "react";
import content from "../content/content";
import Listitem from "./Listitem";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-1/2 text-black font-normal font-thin pb-8  dark: text-white scroll-start "
    >
      <h1 className="text-3xl font-normal font-thin dark:text-white ">
        My Projects:
      </h1>
      <div className=" grid grid-flow-col  grid-rows-4 ">
        {content.projects.map((e, i) => (
          <Listitem key={i} {...e} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
