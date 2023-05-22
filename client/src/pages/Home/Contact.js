import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contacts } = portfolioData;
  return (
    <div>
      <SectionTitle title="Manda um oi!" />
      <div className="flex sm:flex-col items-center justify-evenly">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contacts).map((key) => (
            <p className="ml-5"> 
              <span className="text-secondary">{key}: </span>
              <span className="text-white">"{contacts[key]}",</span>
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
