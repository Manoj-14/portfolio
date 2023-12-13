/* eslint-disable react/prop-types */
import "./project-item.css";
import * as FaIcon from "react-icons/fa";
import * as SiIcon from "react-icons/si";

export default function ProjectItem({ src, title, description, tags }) {
  const IconComponents = {
    Html5: SiIcon.SiHtml5,
    Database: FaIcon.FaDatabase,
    NodeJs: FaIcon.FaNodeJs,
    File: FaIcon.FaFile,
    Angular: FaIcon.FaAngular,
    Css3: FaIcon.FaCss3,
    Spring: SiIcon.SiSpring,
    Javascript: SiIcon.SiJavascript,
    Bootstrap: SiIcon.SiBootstrap,
    MySql: SiIcon.SiMysql,
    Docker: SiIcon.SiDocker,
    Kubernetes: SiIcon.SiKubernetes,
  };

  return (
    <section className="card bg-white  text-black rounded-xl" id="project-card">
      <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
        <img src={src} alt={title} className="h-100 w-100 rounded-md" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <p className="text-xl font-semibold">{title}</p>
        <p className="tags">
          {tags.map((tag, i) => {
            const IconComponent = IconComponents[tag];
            if (IconComponent)
              return <IconComponent className="tag-item" key={i} />;
          })}
        </p>
        <button
          className="text-white text-md px-6 py-1 rounded-xl"
          id="git-btn"
        >
          GitHub
        </button>
      </div>
    </section>
  );
}
