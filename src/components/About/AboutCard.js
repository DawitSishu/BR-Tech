import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, we are <span className="purple">BR Tech </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            <br />
          </p>
        
          <p style={{ color: "rgb(155 126 172)" }}>
            "What would you attempt to do, if you know you wouldn't fail."{" "}
          </p>
          <footer className="blockquote-footer">BR Tech</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
