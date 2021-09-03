/** @format */

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import content from "../content/content";
import Animation from "./Animation";
import Icon from "./Icon";
import anim1 from "../animations/anim1.json";

const Bio = () => {
  return (
    <div className=" flex scroll-start  w-full max-h-1/2 flex-col md:flex-row items-center  text-black dark:text-white ">
      <div className="flex-col items-start align-middle    md: w-full">
        <h1 className="text-5xl ">
          Hi,I{" "}
          <Typewriter
            words={content.writer}
            cursor={true}
            loop={true}
            cursorStyle="|"
            deleteSpeed={40}
            typeSpeed={50}
          />
        </h1>
        <p className="font-normal font-thin lg:leading-stan text-sm md:text-2xl text-justify  ">
          {content.briefdesc}
        </p>
        <div className="flex h-24 my-2 flex-1 justify-evenly flex-wrap">
          {content.contacts.map((e, i) => (
            <Icon key={i} {...e} />
          ))}
        </div>
      </div>
      <div className="w-full h-auto">
        <Animation src={anim1} />
      </div>
    </div>
  );
};

export default Bio;
