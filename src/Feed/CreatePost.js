import { Avatar } from "@material-ui/core";
import { Videocam, PhotoLibrary, InsertEmoticon } from "@material-ui/icons";
import React, { useState } from "react";
import "./CreatePost.css";

const CreatePost = () => {
  const [postInput, setPostInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //DB storage

    //Clear input
    setPostInput("");
    setImgUrl("");
  };
  return (
    <div className="createPost">
      <div className="createPost__top">
        <Avatar />
        <form>
          <input
            type="text"
            placeholder="What's on your mind?"
            className="createPost__input"
            value={postInput}
            onChange={(e) => setPostInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="image URL (OPTIONAL)"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="createPost__bottom">
        <div className="createPost__option">
          <Videocam style={{ color: `red` }} />
          <h3>Live Video</h3>
        </div>
        <div className="createPost__option">
          <PhotoLibrary style={{ color: `green` }} />
          <h3>Live Video</h3>
        </div>
        <div className="createPost__option">
          <InsertEmoticon style={{ color: `orange` }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
