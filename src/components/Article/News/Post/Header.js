import React from "react";
import TeamInfo from "../../TeamInfo";
import PostData from "../../PostData";

const Header = (props) => {
  const teamInfo = (team) => {
    return team ? <TeamInfo team={team} /> : null;
  };

  const postData = (date, author) => <PostData date={date} author={author} />;

  return (
    <div>
      {teamInfo(props.teamdata)}
      {postData(props.date, props.author)}
    </div>
  );
};

export default Header;
