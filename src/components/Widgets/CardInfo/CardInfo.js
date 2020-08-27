import React from "react";
import FontAwesome from "react-fontawesome";
import classes from "./Cardinfo.css";

const CardInfo = (props) => {
  const teamName = (teams, team) => {
    let data = teams.find((item) => {
      return item.id === team;
    });
    if (data) {
      return data.name;
    }
  };
  return (
    <div className={classes.CardInfo}>
      <span className={classes.TeamName}>
        {teamName(props.teams, props.team)}
      </span>
      <span className={classes.Date}>
        <FontAwesome name="clock-o" />
        {props.date}
      </span>
    </div>
  );
};

export default CardInfo;
