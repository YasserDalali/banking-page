import React from "react";
import Marquee from "react-fast-marquee";

export default function Marqueeribbons() {


  return (
   
      <Marquee  speed={100} autoFill={true}
        direction="right"
        className="text-5xl font-major font-bold p-12"
      >
        Touch ATMs&nbsp;<span className="text-7xl">*</span>&nbsp;
      </Marquee>
     
  );
}
