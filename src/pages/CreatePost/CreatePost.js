import React, { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewPost } from "../../store/mySpace/mySpaceActions";
import { postSuccess, selectUserSpace } from "../../store/mySpace/mySpaceSelectors";
import "./CreatePost.css";
import { selectToken } from "../../store/user/selectors";

function CreatePost() {
  const history = useHistory();
  const dispatch = useDispatch();
  const space = useSelector(selectUserSpace);
  const postOk = useSelector(postSuccess);
  const token = useSelector(selectToken);

  const [postData, setPostData] = useState({
    name: "",
    content: "",
    imageUrl: "",
    spaceId: space?.id,
  });

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }

    if (postOk) {
      setTimeout(() => {
        history.push("/myspace");
      }, 3000);
    }
  }, [token, history, postOk]);

  const styles = {
    backgroundColor: space?.backgroundColor,
    color: space?.color,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createNewPost({ ...postData }));

    setPostData({
      name: "",
      content: "",
    });
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
            onChange={(e) => {
              setPostData({ ...postData, imageUrl: e.target.value });
            }}
            value={postData.imageUrl}
          />

          <button className="CreatePost-btn">Post bruh!</button>
          {postOk ? (
            <div>
              <p>Post successfully submmited bro!</p>
            </div>
          ) : null}
        </form>
        {postData.imageUrl && (
          <div className="Image-preview-box">
            <img className="Image-preview" src={postData.imageUrl} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
}

export default CreatePost;
