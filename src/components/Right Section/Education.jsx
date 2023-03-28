import React from "react";
import Content from "../../contents/Content";

const Education = () => {
  return (
    <div className="text-base education">
      <h4 className="w-24 sm:w-full">Education</h4>
      <Content>
        <div className="text-base font-bold university">Anna University</div>
        <div className="mb-2 italic font-bold college">
          <a
            href="https://scadengineering.ac.in/"
            rel="noreferrer noopener"
            target="_blank"
          >
            SCAD College of Engineering and Technology
          </a>
          <br />
          Tirunelveli, Tamil Nadu
        </div>
        <div className="text-base branch">
          <strong className="font-semibold">Branch:</strong> Computer Science
          and Engineering
        </div>
        <div className="text-base study-abroad">
          <strong className="font-semibold">CGPA: 8.17</strong> (upto 7th
          Semester)
        </div>
        <div className="text-base grad-date">
          <strong className="font-semibold">Expected Graduation:</strong>
          <span> May 2023</span>
        </div>
      </Content>
    </div>
  );
};

export default Education;
