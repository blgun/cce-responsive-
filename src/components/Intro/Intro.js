import React from "react";
import "./Intro.css";
import { Jumbotron, Container } from "react-bootstrap";

function Jumbotrons() {
  return (
    <div>
      <Jumbotron fluid className="jumbotron">
        <Container>
          <div>
            <h1 style={{ color: "#fff" }}>
              CCE is a non-profit,community serving NGO with the purpose of
              contrubuting to the development of democratic civil society in
              Mongolia.
            </h1>
            <hr />
            <p>
              Founded in 1992, CCE,originally named Central Asia Development
              Foundation (CADF) was one of the oldest NGOs in Mongolia.Since
              1995,it has been named the Centre of Citizenship Education
              (CCE),CCE organises workshops,training on civis
              education,citizens'participation, NGO management and ecological
              education;develops training curriculum;publishes textbooks, book
              and manuals;provides professional advice and organises national
              and international conferences and seminars.
            </p>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Jumbotrons;
