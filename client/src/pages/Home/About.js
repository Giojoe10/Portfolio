import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "Javascript",
    "MERN",
    "Python",
    "Django",
    "Rust",
    "C#",
    "Java",
    "Flutter + Dart",
    "Machine Learning",
  ];
  return (
    <div>
      <SectionTitle title="Sobre mim" />

      <div className="flex w-full items-center">
        <div className="h-[70vh] w-1/2">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_xu3jsjrn.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            elementum aliquet tincidunt. Cras dignissim dui placerat,
            consectetur arcu consequat, finibus dolor. Donec sed lacus eget nibh
            dignissim laoreet ut eget augue. Curabitur non ligula nisi. Sed
            tristique convallis nisl, eu dictum lectus malesuada in. Nunc
            suscipit mi posuere purus imperdiet.
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            elementum aliquet tincidunt. Cras dignissim dui placerat,
            consectetur arcu consequat, finibus dolor. Donec sed lacus eget nibh
            dignissim laoreet ut eget augue. Curabitur non ligula nisi. Sed
            tristique convallis nisl, eu dictum lectus malesuada in. Nunc
            suscipit mi posuere purus imperdiet.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Recentemente, tenho trabalhado com as tecnologias:
        </h1>
        <div className="flex flex-wrap gap-x-7 gap-y-5 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-7 rounded">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
