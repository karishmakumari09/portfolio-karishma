import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karishma Kumari </span>
            from <span className="purple"> Patna, India.</span>
            <br />I am a junior pursuing Btech in Computer Science & Engineering at MNIT.My primary language is C++ and have basic knowledge in languages like C, Python and Java Script. I am an aspiring competitive programmer and Web-Developer and on a way of learning new skills and technologies each day.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>

            <li className="about-activity">
              <ImPointRight /> Reading Quotes
            </li>
          </ul>

          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Never Ever Even Think Of Setteling For Less , You Have Not Come This Far To Come Only This Far!"{" "}
          </p>
          <footer className="blockquote-footer">Karishma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
