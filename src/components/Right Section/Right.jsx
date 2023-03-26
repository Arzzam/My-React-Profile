import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Intro from "./Intro";
import Projects from "./Projects";
// import Resume from "./Resume";
import Skills from "./Skills";

const Right = () => {
  return (
    <div id="right" className="inline-block float-right w-1/2 overflow-hidden align-top md:block md:w-full">
      <div className="right-inner p-14 sm:p-10">
        <Intro />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        {/* <Resume /> */}
      </div>
    </div>
  );
};

export default Right;
