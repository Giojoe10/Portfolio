import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import { useSelector } from "react-redux";


function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div dark>
      {portfolioData && (
        <div>
          <Header />
          <div className="dark:bg-primary px-40 sm:px-10">
            <Intro />
            <About />
            <Experiences />
            <Projects />
            <Courses />
            <Contact />
            <LeftSider />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
export default Home;
