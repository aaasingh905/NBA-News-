import React from "react";
import Slider from "../../../Widgets/Slider/Slider";
import NewsList from "../../../Widgets/NewsList/NewsList";

const NewsMain = () => {
  return (
    <div>
      <Slider
        type="Featured"
        start={0}
        end={4}
        settings={{
          dots: false,
        }}
      />
      <NewsList type="cardMain" start={5} amount={5} />
    </div>
  );
};

export default NewsMain;
