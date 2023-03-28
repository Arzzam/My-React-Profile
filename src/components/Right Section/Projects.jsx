import React from "react";
// import Project1 from "../Content/Projects";
import Content from "../../contents/Content";
import DATA from "../../data/Data";

const Projects = () => {
  return (
    <div className="projects">
      <h4 className="w-24 sm:w-full">Projects</h4>
      <Content>
        {DATA.map((data) => {
          return (
            <div>
              <div className="project-item" key={data.projectId}>
                <a
                  href={data.link ? data.link : null}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="font-bold project-title"
                >
                  {data.title}
                </a>
                <p className="mx-0 mt-0 mb-3 text-base project-desc">
                  {data.description}
                </p>
              </div>
              <div className="">
                <ul className="p-0 m-0">
                  <li className="ml-5 text-sm list-disc">{data.point1}</li>
                  <li
                    className={`${
                      !data.point3 ? "mb-8" : null
                    } ml-5 text-sm list-disc`}
                  >
                    {data.point2}
                  </li>
                  {data.point3 ? (
                    <li className="ml-5 text-sm list-disc mb-8">
                      {data.point3}
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          );
        })}
      </Content>
    </div>
  );
};

export default Projects;
