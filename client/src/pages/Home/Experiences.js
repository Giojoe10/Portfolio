import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
  const [selecteditemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Experiências" />

      <div className="flex gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#125b854d] w-1/5 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
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
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl ">{experiences[selecteditemIndex].title}</h1>
          <h1 className="text-tertiary text-xl ">{experiences[selecteditemIndex].company}</h1>
          <p className="text-white text-xl ">{experiences[selecteditemIndex].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
