import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;
  return (
    <div className="flex justify-centeritems items-center">
      <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-6 py-10">
        <h1 className="text-white">{welcomeText || ""}</h1>
        <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
          {firstName || ""} {lastName || ""}
        </h1>
        <h1 className="text-5xl sm:text-2xl text-white font-semibold">
          {caption || ""}
        </h1>
        <p className="text-white w-3/6">{description || ""}</p>
        <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
          Comece aqui!
        </button>
      </div>
      <div className="justify-center items-center sm:absolute sm:w-48 sm:right-0 sm:top-2/4">
        <img
          src={require("../../resources/me.jpg")}
          alt="This is me!"
          className="border-2 border-secondary rounded-full"
        />
      </div>
    </div>
  );
}

export default Intro;
