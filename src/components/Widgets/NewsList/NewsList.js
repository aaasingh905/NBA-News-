import React, { Component } from "react";
//import { CSSTransition, TransitionGroup } from 'react-transition';
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./NewsList.css";
import CardInfo from "../CardInfo/CardInfo";

class NewsList extends Component {
  state = {
    teams: [],
    item: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };

  componentWillMount() {
    this.requestNews(this.state.start, this.state.end);
  }

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.requestNews(this.state.end, end);
  };
  requestNews = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`http://localhost:3004/teams`).then((response) => {
        this.setState({
          teams: response.data,
        });
      });
    }
    axios
      .get(`http://localhost:3004/articles?_start=${start}&_end=${end}`)
      .then((response) => {
        this.setState({
          item: [...this.state.item, ...response.data],
          start,
          end,
        });
      });
  };
  renderNews = (type) => {
    let template = null;
    switch (type) {
      case "card":
        template = this.state.item.map((item, i) => (
          <div key={i}>
            {/* <CSSTransition
                   classNames={{
                       enter:classes.NewsList_Wrapper,
                       enterActive:classes.NewsList_Wrapper_enter
                   }}
                   timeout={500}
                   key={i}
                   > */}

            <div className={classes.NewsList_item}>
              <Link to={`/articles/${item.id}`}>
                <CardInfo
                  teams={this.state.teams}
                  team={item.team}
                  date={item.date}
                />
                <h2>{item.title}</h2>
              </Link>
            </div>
          </div>
        ));
        break;
      case "cardMain":
        template = this.state.item.map((item, i) => (
          <div key={i}>
            {/* <CSSTransition
                   classNames={{
                       enter:classes.NewsList_Wrapper,
                       enterActive:classes.NewsList_Wrapper_enter
                   }}
                   timeout={500}
                   key={i}
                   > */}

            <div className={classes.NewsList_item}>
              <Link to={`/articles/${item.id}`}>
                <div className={classes.flex_wrapper}>
                  <div
                    className={classes.left}
                    style={{
                      background: `url('/images/articles/${item.image}')`,
                    }}
                  >
                    <div></div>
                  </div>
                  <div className={classes.right}>
                    <CardInfo
                      teams={this.state.teams}
                      team={item.team}
                      date={item.date}
                    />
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ));
        break;
      default:
        template = null;
    }
    return template;
  };

  render() {
    // console.log(this.state.teams);
    return (
      <div>
        {/* <TransitionGroup
                component = "div"
                className="list" 
                > */}
        {this.renderNews(this.props.type)}
        {/* </TransitionGroup> */}
        <button className={classes.Button} onClick={() => this.loadMore()}>
          Load More
        </button>
      </div>
    );
  }
}

export default NewsList;
