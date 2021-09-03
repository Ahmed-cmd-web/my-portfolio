/** @format */

import React from "react";

const Listitem = ({ name, url, techstack }) => {
  return (
    <div className="w-full text-black my-4 dark:text-white md:text-3xl  justify-self-center ">
      <h1 className="capitalize text-2xl md:text-3xl">{name}:</h1>
      <span className="text-lg md:text-3xl">
        Github source:
        <a
          className="text-blue underline dark:hover:text-purple hover:text-purple dark:text-orange"
          target="_blank"
          rel="noreferrer"
          href={url}
        >
          click here
        </a>
      </span>
      <div>tech used:</div>
      <ul style={{ listStyleType: "circle" }}>
        {techstack.map((e, i) => (
          <li
            key={i}
            className="text-sm md:text-2xl whitespace-nowrap capitalize"
          >
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listitem;
