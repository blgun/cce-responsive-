import React, { Component } from "react";
import classes from "./index.css"
import Table from "react-bootstrap/Table";

class Chronicle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <h1
        >
          Chronicles
        </h1>
        <div
          style={{
            fontFamily: "PT Sans",
            letterSpacing: "0.1em",
            font: "20px",
            marginLeft: "80px",
            marginRight: "80px",
          }}
        >
          <Table borderless>
            <tbody>
              <tr>

                <td className={classes.info}  style={{ borderColor: "#20387D"}}> <b> August 12 1992 </b> <br /> Founded and officially registered under the name Central Asian Development Foundation</td>
                <td className={classes.years} style={{ backgroundColor: "#20387D"}}> <br /> 1992 </td>
                <td className={classes.info}>hi</td>
              </tr>
              <tr>

                <td>Jacob</td>
                <td className={classes.years} style={{ backgroundColor: "#1F407B"}}> <br /> 1993 </td>
                <td>@fat</td>
              </tr>
              <tr>

                <td>hi</td>
                <td>hi</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Chronicle;
