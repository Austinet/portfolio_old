import React from "react";
import About from "./About";
import SkillSet from "./SkillSet";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import EducationWorkExperience from "./EducationWorkExperience";

const Main = () => {
    return(
        <main>
          <About /> 
          <SkillSet />
          <Services />
          <EducationWorkExperience />
          <Portfolio />     
          <Testimonials />
          <Contact />
        </main>
    )
}

export default Main