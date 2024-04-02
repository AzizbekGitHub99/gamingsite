import React, { Component } from "react";

import project1 from "../../../../assets/images/home/project1.png";
import project2 from "../../../../assets/images/home/project2.png";
import project3 from "../../../../assets/images/home/project3.png";
import project4 from "../../../../assets/images/home/project4.png";
import project5 from "../../../../assets/images/home/project5.png";
import project6 from "../../../../assets/images/home/project6.png";

import "./Projects.scss";

class Projects extends Component {
  render() {
    return (
      <section className="projects">
        <div className="container projects-wrapper">
          <h3 className="projects-title">Our Recent Projects</h3>
          <h3 className="projects-subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h3>
          <div className="project-cards">
            <img src={project1} alt="project" className="project-card" />
            <img src={project2} alt="project" className="project-card" />
            <img src={project3} alt="project" className="project-card" />
            <img src={project4} alt="project" className="project-card" />
            <img src={project5} alt="project" className="project-card" />
            <img src={project6} alt="project" className="project-card" />
          </div>
          <div className="button-c">
            <button>SEE ALL</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
