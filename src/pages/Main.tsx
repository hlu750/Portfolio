import React, { FunctionComponent } from "react";
import Navigation from "../components/Navigation";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import About from "../components/About";
import Home from "../components/Home";
import Contact from "../components/Contact";

const Main: FunctionComponent = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, zIndex: 20, width: "full"}}>
        <Navigation />
      </div>
      <div>
        <Home />
        <About />
        <Services />
        <Projects />
        {/* <Skills /> */}
        <Contact />
      </div>
    </div>
  );
};

export default Main;
