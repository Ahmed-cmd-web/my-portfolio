/** @format */

import React, { useState } from "react";
import content from "../content/content";
import Switch from "react-switch";
import Headeropt from "./Headeropt";
import animateScrollTo from "animated-scroll-to";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const Header = () => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    if (!checked) return document.documentElement.classList.add("dark");
    return document.documentElement.classList.remove("dark");
  };
  console.log(document.getElementById("skills"));
  return (
    <div className="flex w-full h-20 dark:bg-black mb-16">
      <div className="flex w-full justify-between px-4 items-center text-2xl items-center">
        <span className="font-flashy dark:text-white text-4xl cursor-default flex-1 ">
          {content.myname}
        </span>
        <button
          onClick={() => setOpen(true)}
          className=" flex lg:hidden text-black bg-none border-none rounded-full p-2 hover:bg-grey dark:text-white dark:hover:bg-purple"
        >
          <MenuIcon />
        </button>
        <SwipeableDrawer
          anchor="top"
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          open={open}
          className={`lg:hidden block`}
        >
          <div className="flex flex-col  items-start dark:bg-black">
            {content.headeropts.map((e, i) => (
              <Headeropt
                key={i}
                title={e.name}
                onClick={() => {
                  animateScrollTo(document.getElementById(e.scrollto));
                  setOpen(false);
                }}
              />
            ))}
            <Headeropt
              comp={
                <Switch
                  handleDiameter={20}
                  onChange={handleChange}
                  checked={checked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#0096FF"
                  className="react-switch"
                />
              }
            />
          </div>
        </SwipeableDrawer>

        <div className="lg:flex items-center  justify-evenly flex-1 hidden ">
          {content.headeropts.map((e, i) => (
            <Headeropt
              key={i}
              title={e.name}
              onClick={() =>
                animateScrollTo(document.getElementById(e.scrollto))
              }
            />
          ))}
          <Headeropt
            comp={
              <Switch
                handleDiameter={20}
                onChange={handleChange}
                checked={checked}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#0096FF"
                className="react-switch"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
