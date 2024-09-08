// app/page.tsx
import React from "react";
import TerminalComponent from "./Components/TerminalComponent/TerminalComponent";
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";

const IndexPage = () => {
  return (
    <div>
      <Intro />
      <TerminalComponent />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default IndexPage;
