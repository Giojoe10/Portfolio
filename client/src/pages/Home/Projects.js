import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

function Projects() {
  const [selecteditemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Projetos" />
      <div className="flex gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#125b854d] w-1/5 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 py-3 ${
                  selecteditemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#0d397c3d] sm:w-40"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
        <img src={projects[selecteditemIndex].image} alt="" className="h-60 w-72"/>
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl ">
              {projects[selecteditemIndex].title}
            </h1>
            <p className="text-white text-xl ">
              {projects[selecteditemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
