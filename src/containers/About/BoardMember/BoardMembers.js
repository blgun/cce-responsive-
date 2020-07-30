import React, { Component } from "react";
import classes from "./BoardMembers.css";
import CardRavdan from "../../../components/UI/Card/AboutCard/CardRavdan";
import CardChultem from "../../../components/UI/Card/AboutCard/CardChultem";
import CardAdiya from "../../../components/UI/Card/AboutCard/CardAdiya";
import CardSainbayar from "../../../components/UI/Card/AboutCard/CardSainbayar";
import CardNansalmaa from "../../../components/UI/Card/AboutCard/CardNansalmaa";
import {
  GAdiya,
  KhRavdan,
  LChultem,
} from "../../../assets/images/AboutUs/BoardMembers";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";

class BoardMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MenuTitle title={"Board Members"}/>

        <CardRavdan imgsrc={KhRavdan} />
        <CardChultem imgsrc={LChultem} />
        <CardAdiya imgsrc={GAdiya} />
        <CardSainbayar imgsrc={GAdiya} />
        <CardNansalmaa imgsrc={GAdiya} />
      </div>
    );
  }
}

export default BoardMembers;
