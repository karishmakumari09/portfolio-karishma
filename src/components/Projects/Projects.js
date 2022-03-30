import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codekund from "../../Assets/Projects/codekund.png";
import portfolio from "../../Assets/Projects/portfolio.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codekund}
              isBlog={false}
              title="Codekund"
              description="Website for birth-chart making(through api call) and consultancies for Horoscope, Palmistry, Vastu etc using Nodejs ,Mongodb ,Bootstrap ,Html5 ,Css3. Appointment booking feature of different intervals for different services for upto 3 days from current date with option for morning and evening slots diffeently ."
              link="https://astroblessing.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Frontend Web Development project using Reactjs and Bootstrap in it.It used react-route-dom for moving to other tab without refreshing."
              link="http://eloquent-gumdrop-41e787.netlify.app"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
