import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./HOC/Layout/Layout";
import NewsArticle from "./components/Article/News/Post/Post";
import VideosArticle from "./components/Article/Videos/Video/Video";
import NewsMain from "./components/Article/News/Main/NewsMain";
import VideosMain from "./components/Article/Videos/Main/VideosMain";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={NewsMain} />
          <Route path="/videos" exact component={VideosMain} />
          <Route path="/articles/:id" exact component={NewsArticle} />
          <Route path="/Videos/:id" exact component={VideosArticle} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
