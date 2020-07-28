import React, { Component } from "react";
import CardRavdan from "../../../components/UI/Card/AboutCard/CardRavdan";
import CardChultem from "../../../components/UI/Card/AboutCard/CardChultem";
import CardAdiya from "../../../components/UI/Card/AboutCard/CardAdiya";
import CardSainbayar from "../../../components/UI/Card/AboutCard/CardSainbayar";
import CardNansalmaa from "../../../components/UI/Card/AboutCard/CardNansalmaa";

class BoardMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h1
            style={{
              margin: "15px auto",
              padding: "15px",
              width: "500px",
              textAlign: "center",
              backgroundColor: "#494d4c",
              color: "#fff",
              textDecoration: "underline",
              textDecorationColor: "#5fadad",
            }}
          >
            Board Members
          </h1>
        </div>

        <CardRavdan />
        <CardChultem />
        <CardAdiya />
        <CardSainbayar />
        <CardNansalmaa />
      </div>
    );
  }
}

export default BoardMembers;
