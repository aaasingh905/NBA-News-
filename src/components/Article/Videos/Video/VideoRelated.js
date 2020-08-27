import React from "react";
import classes from "../../Article.css";
import VideoTemplate from "../../../Widgets/VideosList/VideoTemplate";

const VideoRelated = (props) => (
  <div className={classes.Related}>
    <VideoTemplate data={props.data} teams={props.teams} />
  </div>
);

export default VideoRelated;
