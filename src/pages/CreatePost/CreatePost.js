import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewPost, setPostFailure } from "../../store/mySpace/mySpaceActions";
import { postSuccess, selectUserInfo, selectUserSpace } from "../../store/mySpace/mySpaceSelectors";
import "./CreatePost.css";
import _ from "lodash";

function CreatePost() {
  const history = useHistory();
  const dispatch = useDispatch();
  const space = useSelector(selectUserSpace);
  const postOk = useSelector(postSuccess);
  const user = useSelector(selectUserInfo);
  // console.log(space);
  const [postData, setPostData] = useState({
    name: "",
    content: "",
    imageUrl: "",
    spaceId: space?.id,
  });

  if (_.isEmpty(user)) {
    history.push("/");
  }

  if (postOk) {
    setInterval(() => {
      dispatch(setPostFailure());
    }, 2000);
  }

  // console.log(postData);
  // console.log("postOK", postOk);

  const styles = {
    backgroundColor: space?.backgroundColor,
    color: space?.color,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createNewPost(postData));
  };

  return (
    <div style={styles} className="CreatePost">
      <Jumbotron className="MySpace-jumbo">
        <h1 className="MySpace-jumbo-header">{space?.title}</h1>
        <h3 className="MySpace-jumbo-subheader">{space?.description}</h3>
      </Jumbotron>
      <div className="CreatePost-form-wrapper">
        <form onSubmit={handleSubmit} className="CreatePost-form">
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
          {postOk ? (
            <div>
              <p>Post successfully submmited bro!</p>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
