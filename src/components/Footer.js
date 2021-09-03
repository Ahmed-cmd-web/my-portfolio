/** @format */

import React from "react";
import content from "../content/content";
import Icon from "./Icon";

const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full px-12 flex flex-col items-center dark:text-white"
    >
      <div className="flex items-center my-4">
        <h1 className="text-3xl">Contact Me</h1>
        <img
          alt="☎️"
          draggable="false"
          src="https://twemoji.maxcdn.com/2/72x72/260e.png"
          className="h-12 w-12 mx-1 "
        />
      </div>
      <span className="text-2xl my-4 text-center">
        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
      </span>
      <a
        className="text-2xl hover:text-red hover:text-shadow-xl transition-all duration-200 my-4 "
        href="tel:+(02)1555956159"
      >
        (+20)1555956159
      </a>
      <a
        className="text-2xl hover:text-red hover:text-shadow-xl transition-all duration-200 my-4 break-all "
        href="mailto:ahmeddragon700@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        ahmeddragon700@gmail.com
      </a>
      <div className="flex h-24 my-2 flex-1 justify-evenly flex-wrap">
        {content.contacts.map((e, i) => (
          <Icon key={i} {...e} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
