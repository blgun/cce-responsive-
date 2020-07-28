import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemNumber: {},
    };
  }
  render() {
    return (
      <div>
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
                  marginTop: "0px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                Our Mission
              </h1>
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor: "#FFFFFF" }}>
              <h4
                style={{
                  fontWeight: "bold",
                  lineHeight: "1em",
                  letterSpacing: "0.05em",
                  padding: "0px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#86E2D4",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  OUR MISSION IS{" "}
                </div>{" "}
                <br />{" "}
                <div
                  style={{
                    backgroundColor: "#97FDEE",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    width: "150px",
                  }}
                >
                  {" "}
                  CARRIED OUT{" "}
                </div>{" "}
                <br />{" "}
                <div
                  style={{
                    backgroundColor: "#C3FDF5",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  THROUGH OUR{" "}
                </div>
              </h4>
            </Col>
            <Col sm={6} style={{ margin: "auto", textAlign: "center" }}>
              <Button
                style={{
                  borderRadius: "50%",
                  border: "4px solid #F06D51",
                  height: "110px",
                  width: "110px",
                  fontSize: "small",
                  margin: "0 10px",
                }}
                variant="light"
              >
                Civic <br /> Education <br /> Program
              </Button>
              <Button
                style={{
                  borderRadius: "50%",
                  border: "4px solid #40bdf7",
                  height: "110px",
                  width: "110px",
                  fontSize: "small",
                  margin: "0 10px",
                }}
                variant="light"
              >
                Citizen <br /> Participatory <br /> program
              </Button>
              <Button
                style={{
                  borderRadius: "50%",
                  border: "4px solid #F1EF70",
                  height: "110px",
                  width: "110px",
                  fontSize: "small",
                  margin: "0 10px",
                }}
                variant="light"
              >
                Youth <br /> Development <br /> Program
              </Button>
              <Button
                style={{
                  borderRadius: "50%",
                  border: "4px solid #70e6b9",
                  height: "110px",
                  width: "110px",
                  fontSize: "small",
                  margin: "0 10px",
                }}
                variant="light"
              >
                Ecology <br /> Education <br /> Program
              </Button>
            </Col>
            <Col
              sm={4}
              style={{
                backgroundColor: "#5ed6c0",
                marginRight: "15px",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              <h4
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  position: "relative",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  lineHeight: "2.0em",
                  letterSpacing: "0.07em",
                }}
              >
                "CCE's mission is to promote a <br /> knowledgeable, competent
                and <br />
                responsible citizenry in Mongolia"
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Mission;
