import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import * as animationData from "../../resources/lottie_me.json"

function About() {
    const { portfolioData } = useSelector((state) => state.root);
    const { about } = portfolioData;
    const { lottieURL, description1, description2, skills } = about;
    return (
        <div>
            <SectionTitle title="Sobre mim" />
            <div className="flex w-full items-center sm:flex-col">
                <div className="h-[70vh] w-1/2 sm:w-full">
                    <Lottie animationData={animationData} loop={true} play={true} className="h-full w-full"/>
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full">
                    <p className="text-white">{description1 || ""}</p>
                    <p className="text-white">{description2 || ""}</p>
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
