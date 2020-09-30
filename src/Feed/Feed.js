import React from "react";
import CreatePost from "./CreatePost";
import "./Feed.css";
import StoryReel from "./StoryReel";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <CreatePost />
    </div>
  );
};

export default Feed;
