import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Project from "../components/Projects";
import ContactSection from "../components/Contact";
import CertificateShowcase from "../components/Certificate";
import NavigationButton from "../components/NavigationButton";

const Home = () => {
  return (
    <div>
      <NavigationButton />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="project"><Project /></div>
      <div id="certificate"><CertificateShowcase/></div>
      <div id="contact"><ContactSection /></div>
    </div>
  );
};

export default Home;
