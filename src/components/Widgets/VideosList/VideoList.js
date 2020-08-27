import React, { Component } from "react";
import classes from "./VideoList.css";
import axios from "axios";
import Button from "../Button/Button";
import VideoTemplate from "./VideoTemplate";

class VideoList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };
  componentWillMount() {
    this.requestVideos(this.state.start, this.state.end);
  }
  printTitle = (title) => {
    return title ? (
      <h3>
        <strong>NBA</strong> Videos
      </h3>
    ) : null;
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.requestVideos(this.state.end, end);
  };
  requestVideos = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`http://localhost:3004/teams`).then((response) => {
        this.setState({
          teams: response.data,
        });
      });
    }
    axios
      .get(`http://localhost:3004/videos?_start=${start}&_end=${end}`)
      .then((response) => {
        this.setState({
          videos: [...this.state.videos, ...response.data],
          start,
          end,
        });
      });
  };
  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        cta="Load More Videos"
        loadmore={() => this.loadMore()}
      />
    ) : (
      <Button type="linkTo" cta="More Videos" linkTo="/videos" />
    );
  };

  renderVideos = (type) => {
    let template = null;
    switch (this.props.type) {
      case "card":
        template = (
          <VideoTemplate data={this.state.videos} teams={this.state.teams} />
        );
        break;
      default:
        template = null;
    }
    return template;
  };

  render() {
    // console.log(this.state.videos);
    return (
      <div className={classes.VideoList_Wrapper}>
        {this.printTitle(this.props.title)}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}

export default VideoList;
