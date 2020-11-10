import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUserInfo, selectUserSpace } from "../../store/mySpace/mySpaceSelectors";
import "./EditProfile.css";
import _ from "lodash";
import { fetchUserSpace, updateSpace } from "../../store/mySpace/mySpaceActions";

function EditProfile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const space = useSelector(selectUserSpace);
  const user = useSelector(selectUserInfo);

  console.log("WHATS IN SPACE???!", space);

  const [profileData, setProfileData] = useState({
    title: space?.title,
    description: space?.description,
    backgroundColor: space?.backgroundColor,
    color: space?.color,
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

    dispatch(updateSpace(profileData));
    dispatch(fetchUserSpace());
  };

  return (
    <div style={styles} className="EditProfile">
      <Jumbotron className="MySpace-jumbo">
        <h1 className="MySpace-jumbo-header">{space?.title}</h1>
        <h3 className="MySpace-jumbo-subheader">{space?.description}</h3>
      </Jumbotron>
      <div className="EditProfile-form-wrapper">
        <form onSubmit={handleSubmit} className="EditProfile-form">
          <h1 className="EditProfile-header">Express youself bro...</h1>
          <label className="EditProfile-label" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="EditProfile-input"
            onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
            value={profileData.title}
          />
          <label className="EditProfile-label" htmlFor="description">
            Change the description bruh!
          </label>
          <textarea
            id="description"
            type="text"
            className="EditProfile-input"
            onChange={(e) => setProfileData({ ...profileData, description: e.target.value })}
            value={profileData.description}
          />
          <label className="EditProfile-label-color" htmlFor="backgroundColor">
            A new background color would be nice bro!
          </label>
          <input
            id="backgroundColor"
            type="color"
            className="EditProfile-input-color"
            onChange={(e) => {
              setProfileData({ ...profileData, backgroundColor: e.target.value });
            }}
            value={profileData.backgroundColor}
          />
          <label className="EditProfile-label-color" htmlFor="color">
            Set a nice color bro!
          </label>
          <input
            id="color"
            type="color"
            className="EditProfile-input-color"
            onChange={(e) => {
              setProfileData({ ...profileData, color: e.target.value });
            }}
            value={profileData.color}
          />

          <button className="CreatePost-btn">Submit Changes Bro!</button>
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
