import React from "react";
import TeamInfo from "../../TeamInfo";

const Header = (props) => {
  const teamInfo = (team) => {
    return team ? <TeamInfo team={team} /> : null;
  };

  return <div>{teamInfo(props.teamdata)}</div>;
};

export default Header;
