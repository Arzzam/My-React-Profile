import React from "react";
import Content from "../../contents/Content";

const Experience = () => {
  return (
    <div className="text-base experience">
      <h4 className="w-24 sm:w-full">Experience</h4>
      <Content>
        <div className="m-0">
          <span className="text-base font-bold title sm:text-sm">
            Full stack Developer - Intern
          </span>
          <span className="text-sm font-medium float-right text-light md:text-xs">
            March 2023 - Present
          </span>
        </div>
        <div className="mb-2 italic company">
          <a href="https://www.xbi4.com/" className="font-bold">
            XBI4
          </a>
          <br />
          <div>Tenkasi, Tamil Nadu</div>
        </div>
        <div className="">
          <ul className="p-0 m-0">
            <li className="ml-5 text-sm list-disc">
              Developing and maintaining in-house website primarily using
              JavaScript, React,Tailwind CSS and Node.
            </li>
            <li className="ml-5 text-sm list-disc">
              Working in 2 projects and with the design team to innovate new
              user experiences.
            </li>
            <li className="ml-5 text-sm list-disc">
              Collaborating with the team to establish design, app interaction
              and enhancement.
            </li>
          </ul>
        </div>
      </Content>
    </div>
  );
};

export default Experience;
