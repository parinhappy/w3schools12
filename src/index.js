import React from "react";
import ReactDom from "react-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import ProjectItem from "./components/ProjectItem";
import John from "./components/John";
import Contact from "./components/Contact";
import Hero1 from "./components/Heoro1";
import Footer from "./components/Footer";


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Hero />
          <Projects />
          <ProjectItem/>
          <About/>
          <John/>
          <Contact/>
          <Hero1/>
        </div>
        <Footer/>
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector("#root"));