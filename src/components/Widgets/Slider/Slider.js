import React, { Component } from "react";
import axios from "axios";
import SliderTemplates from "./SliderTemplates";

class Slider extends Component {
  state = {
    news: [],
  };
  componentWillMount() {
    axios
      .get(
        `http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.end}`
      )
      .then((response) => {
        this.setState({
          news: response.data,
        });
      });
  }
  render() {
    // console.log(this.state.news)
    return (
      <div>
        <SliderTemplates
          data={this.state.news}
          type={this.props.type}
          setting={this.props.settings}
        />
      </div>
    );
  }
}

export default Slider;
