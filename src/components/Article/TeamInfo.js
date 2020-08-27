import React from "react";
import classes from "./Article.css";

const TeamInfo = (props) => {
  return (
    <div className={classes.TeamHeader}>
      <div
        className={classes.left}
        style={{
          background: `url('/images/teams/${props.team.logo}')`,
        }}
      ></div>
      <div className={classes.right}>
        <div>
          <span>
            {props.team.city} {props.team.name}
          </span>
          <div>
            <strong>
              W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
