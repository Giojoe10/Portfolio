import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses";

function Courses() {
  const [selecteditemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Cursos" />
      <div className="flex gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#125b854d] w-1/5 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((course, index) => (
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
                {course.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl ">
              {courses[selecteditemIndex].title}
            </h1>
            <p className="text-white text-xl ">
              {courses[selecteditemIndex].description}
            </p>
          </div>
        <img src={courses[selecteditemIndex].image} alt="" className="h-52 w-80"/>
        </div>
      </div>
    </div>
  );
}

export default Courses;