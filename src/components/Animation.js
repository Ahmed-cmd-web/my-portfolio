/** @format */

import React from "react";
import Lottie from "react-lottie";
const Animation = ({ src }) => {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: src,

        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: true,
        },
      }}
      width={"100%"}
      style={{ cursor: "default" }}
    />
  );
};

export default Animation;
