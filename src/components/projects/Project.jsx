import ProjectItem from "./project-item/ProjectItem";
import { PROJECTS } from "./projects.js";
import { FaArrowRight } from "react-icons/fa";
import "./project.css";

export default function Project() {
  return (
    <>
      <div className="" id="project">
        <div>
          <h1>
            <span className="line-span"></span>Projects
            <span className="line-span"></span>
          </h1>
        </div>

        <div className="projectSection">
          {PROJECTS.map((pro) => (
            <ProjectItem
              key={pro.title}
              title={pro.title}
              src={pro.src}
              tags={pro.tags}
            />
          ))}
        </div>
        <div>
          <a href="" className="icon-parent">
            Visit GitHub <FaArrowRight className="icons" />{" "}
          </a>
        </div>
      </div>
    </>
  );
}
