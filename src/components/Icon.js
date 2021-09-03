/** @format */

import React from "react";
import * as Icons from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({
  icon,
  size,
  bg,
  url = null,
  name = null,
  hover = true,
  color = "white",
  changecolor = false,
}) => {
  return (
    <div className="items-center flex flex-col">
      <a
        rel="noreferrer"
        href={url}
        className={`w-16 h-16 flex justify-center mx-8 items-center rounded-full  ${
          hover && "hover:bg-black"
        } border-0 bg-${bg}`}
        target="_blank"
      >
        <FontAwesomeIcon
          className={`text-${color} ${changecolor && "hover:text-purple2"} `}
          icon={Icons[icon]}
          size={"3x"}
        />
      </a>
      {name && <p className=" font-thin font-normal ">{name}</p>}
    </div>
  );
};

export default Icon;
