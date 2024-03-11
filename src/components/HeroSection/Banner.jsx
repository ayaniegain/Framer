import React from "react";
import arrow from "../../assets/arrow.png";

function Banner() {
  return (
    <div className="bg-black h-10 flex justify-center items-center">
    <span className="flex justify-center items-center text-white opacity-60 h-4 p-3">
      This page is included in a free SaaS Website Kit.
    </span>
      <span className="flex items-center">
        <span className="text-white !important">View the complete Kit link</span> 
        <img src={arrow} alt="arrow" className="h-4 w-4 mx-2 text-white" />
      </span>
  </div>
  
  );
}

export default Banner;
