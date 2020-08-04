import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "../sidebarItem/sidebarItem";

function SidebarComponent() {
  return <div>hello from the sidebar</div>;
}

export default withStyles(styles)(SidebarComponent);
