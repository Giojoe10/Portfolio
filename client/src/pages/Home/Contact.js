import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Giovanni Mateus Barbieri",
    age: "20",
    gender: "Male",
    email: "giovannimbarbieri@gmail.com",
    country: "Brazil",
  };

  return (
    <div>
      <SectionTitle title="Manda um oi!" />
      <div className="flex sm:flex-col items-center justify-evenly">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-secondary">{key}: </span>
              <span className="text-white">"{user[key]}",</span>
            </p>
          ))}
          <p className="text-tertiary   ">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_enlitdkl.json"
            background="transparent"
            speed="0.5"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
