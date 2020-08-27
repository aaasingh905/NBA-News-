import React from "react";
import classes from "./Article.css";

const PostData = (props) => {
  return (
    <div className={classes.PostData}>
      <div>
        Date:<span>{props.date}</span>
      </div>
      <div>
        Author:<span>{props.author}</span>
      </div>
    </div>
  );
};

export default PostData;
