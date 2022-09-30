import React from "react";
import GenPageBody from "../components/GenPageBody/GenPageBody";
import HeaderWLogo from "../components/Navbar";
import { HeaderWNavItems } from "../components/HeaderWNavItems/HeaderWNavItems";

const About = () => {
  return (
    <div className="aboutSectionContainer">
      <HeaderWLogo />
      <HeaderWNavItems />
      <GenPageBody />
    </div>
  );
};

export default About;
