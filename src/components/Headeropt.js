/** @format */

import React from "react";

const Headeropt = ({ title = null, comp = null, onClick = null }) => {
  return (
    <span
      onClick={onClick}
      className=" px-4 flex-nowrap  w-full lg:w-auto  font-thin text-sm capitalize  lg:text-lg  flex   h-16 items-center lg:justify-center cursor-pointer  hover:bg-grey dark:hover:text-white  dark:text-white dark:hover:bg-purple  "
    >
      {comp ? comp : title}
    </span>
  );
};

export default Headeropt;
