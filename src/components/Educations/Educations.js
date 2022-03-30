import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCards";
import Particle from "../Particle";
import ips from "../../Assets/ips.jpeg";
import mnit from "../../Assets/mnit.jpeg";


function Educations() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education </strong>
        </h1>
    <br/>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <EducationCard
              imgPath={mnit}
            Examination="Graduation"
            UniversityOrBoard="NIT Jaipur (MNIT)"
            Institute="NIT Jaipur (MNIT)"
            PassingYear="2023"
            CGPA="8.02 CGPA"

            />
          </Col>
          <Col md={4} className="project-card">
            <EducationCard
              imgPath={ips}
            Examination="Intermediate/+2"
            UniversityOrBoard="CBSE"
            Institute="Indian Public School"
            PassingYear="2018"
            CGPA="93.00 %"

            />
          </Col>

            <Col md={4} className="project-card">
              <EducationCard
                imgPath={ips}
              Examination="Matriculation"
              UniversityOrBoard="CBSE"
              Institute="Indian Public School"
              PassingYear="2016"
              CGPA="10 CGPA"

              />
            </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Educations;
