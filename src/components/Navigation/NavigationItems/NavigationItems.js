import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationItemDrop from "./NavigationItemDrop/NavigationItemDrop";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      HOME
    </NavigationItem>
    <NavigationItemDrop title="ABOUT US" />
    <NavigationItemDrop title="PROGRAMS" />
    <NavigationItem link="/news">NEWS</NavigationItem>
    <NavigationItemDrop title="ARCHIVES" />
    <NavigationItemDrop title="PUBLICATIONS" />
  </ul>
);

export default navigationItems;
