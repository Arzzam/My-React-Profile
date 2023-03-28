import React from "react";
import Education from "../components/Right Section/Education";
import Experience from "../components/Right Section/Experience";
import Intro from "../components/Right Section/Intro";
import Projects from "../components/Right Section/Projects";
import Resume from "../components/Right Section/Resume";
import Skills from "../components/Right Section/Skills";

const Right = () => {
  return (
    <div
      id="right"
      className="inline-block float-right w-1/2 overflow-hidden align-top md:block md:w-full"
    >
      <div className="right-inner p-14 sm:p-10">
        <Intro />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Resume />
      </div>
    </div>
  );
};

export default Right;
