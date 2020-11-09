import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewPost, setPostFailure } from "../../store/mySpace/mySpaceActions";
import { postSuccess, selectUserInfo, selectUserSpace } from "../../store/mySpace/mySpaceSelectors";
import "./EditProfile.css";
import _ from "lodash";

function EditProfile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const space = useSelector(selectUserSpace);
  const user = useSelector(selectUserInfo);

  const [profileData, setProfileData] = useState({
    name: "",
    content: "",
    imageUrl: "",
    spaceId: space?.id,
  });

  if (_.isEmpty(user)) {
    history.push("/");
  }

  // console.log(postData);
  // console.log("postOK", postOk);

  const styles = {
    backgroundColor: space?.backgroundColor,
    color: space?.color,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={styles} className="EditProfile">
      <Jumbotron className="MySpace-jumbo">
        <h1 className="MySpace-jumbo-header">{space?.title}</h1>
        <h3 className="MySpace-jumbo-subheader">{space?.description}</h3>
      </Jumbotron>
      <div className="EditProfile-form-wrapper">
        <form onSubmit={handleSubmit} className="EditProfile-form">
          <h1 className="EditProfile-header">Post a cool story bro...</h1>
          <label className="EditProfile-label" htmlFor="name">
            Title
          </label>
          <input
            id="name"
            type="text"
            className="EditProfile-input"
            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
            value={profileData.name}
          />
          <label className="EditProfile-label" htmlFor="content">
            Share a cool story bro!
          </label>
          <textarea
            id="contet"
            type="text"
            className="EditProfile-input"
            onChange={(e) => setProfileData({ ...profileData, content: e.target.value })}
            value={profileData.content}
          />
          <label className="EditProfile-label" htmlFor="image">
            Upload a cool picture bro!
          </label>
          <input
            id="image"
            type="text"
            className="EditProfile-input"
            onChange={(e) => {
              setProfileData({ ...profileData, imageUrl: e.target.value });
            }}
            value={profileData.imageUrl}
          />

          <button className="CreatePost-btn">Post bruh!</button>
          {/* {postOk ? (
            <div>
              <p>Post successfully submmited bro!</p>
            </div>
          ) : null} */}
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
