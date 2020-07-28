import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Partner from "../../../components/UI/Card/Partners/Card";
class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          style={{
            margin: "0 auto",
            width: "1200px",
            padding: "30px 0",
            backgroundColor: "#d7eef1",
          }}
        >
          <Container fluid={true}>
            <Row>
              <Col md={{ span: 3, offset: 4 }}>
                <h1
                  style={{
                    textAlign: "center",
                    backgroundColor: "#494d4c",
                    color: "#fff",
                    textDecoration: "underline",
                    textDecorationColor: "#5fadad",
                  }}
                >
                  Partners
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
        <Partner />
      </div>
    );
  }
}
export default Partners;
