import React from "react";
import CardIcon from "../Icons/CardIcon";
import classes from "./HeaderButton.module.css";

function HeaderButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CardIcon/>
      </span>
      <span>your card</span>
      <span>3</span>
    </button>
  );
}

export default HeaderButton;
