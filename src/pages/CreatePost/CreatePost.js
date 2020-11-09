import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUserSpace } from "../../store/mySpace/mySpaceSelectors";
import "./CreatePost.css";

function CreatePost() {
  const space = useSelector(selectUserSpace);
  const [postData, setPostData] = useState({
    name: "",
    content: "",
    imageUrl: "",
    spaceId: 0,
  });

  const styles = {
    backgroundColor: space?.backgroundColor,
    color: space?.color,
  };

  return (
    <div style={styles} className="CreatePost">
      <Jumbotron className="MySpace-jumbo">
        <h1 className="MySpace-jumbo-header">{space?.title}</h1>
        <h3 className="MySpace-jumbo-subheader">{space?.description}</h3>
      </Jumbotron>
      <div className="CreatePost-form-wrapper">
        <form className="CreatePost-form">
          <h1 className="CreatePost-header">Post a cool story bro...</h1>
          <label className="CreatePost-label" htmlFor="name">
            Title
          </label>
          <input
            id="name"
            type="text"
            className="CreatePost-input"
            onChange={(e) => setPostData({ ...postData, name: e.target.value })}
            value={postData.name}
          />
          <label className="CreatePost-label" htmlFor="content">
            Share a cool story bro!
          </label>
          <textarea
            id="contet"
            type="text"
            className="CreatePost-input"
            onChange={(e) => setPostData({ ...postData, content: e.target.value })}
            value={postData.content}
          />
          <label className="CreatePost-label" htmlFor="image">
            Upload a cool picture bro!
          </label>
          <input
            id="image"
            type="text"
            className="CreatePost-input"
            onChange={(e) => setPostData({ ...postData, imageUrl: e.target.value })}
            value={postData.imageUrl}
          />
          <button className="CreatePost-btn">Post bruh!</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
