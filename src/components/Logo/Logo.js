import React from "react";

import Logo from "../../assets/images/Home/logo.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={Logo} alt="CCE logo" />
    <p>the center for citizen education</p>
  </div>
);

export default logo;
