import React from "react";
import Content from "../../contents/Content";

const Skills = () => {
  return (
    <div className="skills">
      <h4 className="w-24 sm:w-full">Skills</h4>
      <Content >
        <div className="mb-2 skill-category">
          <strong className="text-base font-bold uppercase last-of-type:mb-0">Languages: </strong>
          <span>JavaScript, Java, HTML5, CSS3, SQL</span>
        </div>
        <div className="mb-2 skill-category">
          <strong className="text-base font-bold uppercase last-of-type:mb-0">Libraries & Frameworks: </strong>
          <span>
            React, jQuery, Node(Beginner), Bootstrap, Tailwind CSS, Material UI, Styled Components
          </span>
        </div>
        <div className="mb-2 skill-category">
          <strong className="text-base font-bold uppercase last-of-type:mb-0">Tools: </strong>
          <span>
            Git, Github, Photoshop, Illustrator, Canva, InDesign(Beginner)
          </span>
        </div>
      </Content>
    </div>
  );
};

export default Skills;
