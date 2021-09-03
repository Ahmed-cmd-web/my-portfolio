/** @format */

import React from "react";
import anim2 from "../animations/anim2.json";
import content from "../content/content";
import Animation from "./Animation";
import Icon from "./Icon";
const Skills = () => {
  return (
    <div
      id="skills"
      className="flex w-full max-h-1/2 scroll-start   flex-col-reverse md:flex-row items-center justify-center   text-black dark:text-white  "
    >
      <div className="w-full">
        <Animation src={anim2} />
      </div>
      <div className="flex-col items-center align-middle  md: w-full">
        <div className="flex-col items-start align-middle    md: w-full">
          <h1 className="text-4xl">What I do</h1>
          <span className=" text-gainsboro">{content.skill}</span>
          <div className="flex  w-full my-4 flex-1  items-center justify-center flex-wrap ">
            {content.softwareskills.map((e, i) => (
              <Icon
                key={i}
                color="grey2"
                hover={false}
                changecolor={true}
                {...e}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
