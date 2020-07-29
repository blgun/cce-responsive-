import React from "react";
import style from "./style.css";

const MenuTitle = (props) => {
  return (
    <div className={style.MenuTitleContainer}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default MenuTitle;
