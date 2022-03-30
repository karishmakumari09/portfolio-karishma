import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function EducationCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.Examination}<br/>  </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
        <div style={{ color:"#87209e"} }>University/Board:    </div>{props.UniversityOrBoard}<br/>

        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
        <div style={{ color:"#87209e"} }>Institute:    </div>  {props.Institute}<br/>

        </Card.Text>

        <Card.Text style={{ textAlign: "justify",color:"#87209e" }}>
        {props.PassingYear}
      </Card.Text>
        <Card.Text style={{ textAlign: "justify",color:"#87209e" }}>
          {props.CGPA}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default EducationCards;
