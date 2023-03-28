import React from "react";
import Content from "../../contents/Content";

const Intro = () => {
  return (
    <div className="introduction">
      <h4 className="w-24 sm:w-full">Intro</h4>
      <Content>
        <p className="mb-4 intro-p first-of-type:mt-0">
          I am presently in the last year of my bachelor program at SCAD College
          of Engineering and Technology in the field of Computer Science and
          Engineering.
        </p>
        <p className="my-4 intro-p first-of-type:mt-0">
          In my free time, I enjoy learning new graphic design skills and
          designing logos and posters. I also love playing football and
          regularly participate in local pickup games.
        </p>
        <span className="font-medium text-transparent intro-p first-of-type:mt-0 bg-clip-text bg-bgimage bg-gradient-to-t from-bgGra1 to-bgGra2">
          I am seeking a career opportunity that presents abundant possibilities
          for personal and professional advancement, where I can leverage my
          extensive knowledge and skills to make a meaningful impact and
          contribute to the overall triumph of the organization.
        </span>
      </Content>
    </div>
  );
};

export default Intro;
