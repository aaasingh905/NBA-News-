import React, { Component } from "react";
import axios from "axios";
import classes from "../../../Article/Article.css";
import Header from "./Header";
class Post extends Component {
  state = {
    article: [],
    team: [],
  };
  componentWillMount() {
    axios
      .get(`http://localhost:3004/articles/?id=${this.props.match.params.id}`)
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
      });
  }
  render() {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div className={classes.ArticleWrapper}>
        <Header
          teamdata={team[0]}
          date={article.date}
          author={article.author}
        />
        <div className={classes.Body}>
          <h1>{article.title}</h1>
          <div
            className={classes.Image}
            style={{
              background: `url('/images/articles/${article.image}')`,
            }}
          ></div>
          <div className={classes.BodyText}>{article.body}</div>
        </div>
      </div>
    );
  }
}

export default Post;
