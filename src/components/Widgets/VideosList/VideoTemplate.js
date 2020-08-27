import React from "react";
import classes from "./VideoList.css";
import { Link } from "react-router-dom";
import CardInfo from "../CardInfo/CardInfo";

const VideoTemplate = (props) => {
  return props.data.map((item, i) => {
    return (
      <Link to={`/videos/${item.id}`} key={i}>
        <div className={classes.VideoTemplate_Wrapper}>
          <div
            className={classes.left}
            style={{
              background: `url(/images/videos/${item.image})`,
            }}
          >
            <div></div>
          </div>
          <div className={classes.right}>
            <CardInfo teams={props.teams} team={item.team} date={item.date} />
            <h2>{item.title}</h2>
          </div>
        </div>
      </Link>
    );
  });
};

export default VideoTemplate;
