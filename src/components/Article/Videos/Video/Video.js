import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import classes from "../../Article.css";
import VideoRelated from "./VideoRelated";
class Video extends Component {
  state = {
    article: [],
    team: [],
    teams: [],
    related: [],
  };
  componentWillMount() {
    axios
      .get(`http://localhost:3004/videos/?id=${this.props.match.params.id}`)
      .then((response) => {
        let article = response.data[0];
        axios
          .get(`http://localhost:3004/teams/?id=${article.team}`)
          .then((response) => {
            this.setState({
              article,
              team: response.data,
            });
          });
        this.getRelated();
      });
  }

  getRelated = () => {
    axios.get(`http://localhost:3004/teams`).then((response) => {
      let teams = response.data;
      axios
        .get(
          `http://localhost:3004/videos/?q=${this.state.team[0].city}&_limit=3`
        )
        .then((response) => {
          this.setState({
            teams,
            related: response.data,
          });
        });
    });
  };
  render() {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div>
        <Header teamdata={team[0]} />
        <div className={classes.Video}>
          <h1>{article.title}</h1>
          <iframe
            title="Videoplayer"
            width="100%"
            height="300px"
            src={`http://www.youtube.com/embed/${article.url}`}
          ></iframe>
        </div>
        <VideoRelated
          data={this.state.related}
          teams={this.state.teams}
        ></VideoRelated>
      </div>
    );
  }
}

export default Video;
