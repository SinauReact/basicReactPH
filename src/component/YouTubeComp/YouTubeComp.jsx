import React from "react";
import "./YouTubeComp.css";

const YouTubeComp = ({ time, title, desc }) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src={"https://source.unsplash.com/200x400?youtube"} alt="" />
        <p className="time">{time}</p>
      </div>
      <p className="title">{title} </p>
      <p className="desc"> {desc} </p>
    </div>
  );
};

YouTubeComp.defaultProps = {
  time: "00:00",
  title: "title here",
  desc: "xx ditonton, x hari yang lalu",
};

export default YouTubeComp;
