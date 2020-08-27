import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.css";

const Button = (props) => {
  let template = null;

  switch (props.type) {
    case "loadmore":
      template = (
        <div className={classes.Button} onClick={props.loadmore}>
          {props.cta}
        </div>
      );
      break;
    case "linkTo":
      template = (
        <Link to={props.linkTo} className={classes.Button}>
          {props.cta}
        </Link>
      );
      break;
    default:
      template = null;
  }
  return template;
};

export default Button;
