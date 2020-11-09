import React, { useEffect } from "react";
import "./MySpace.css";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSpace } from "../../store/mySpace/mySpaceActions";
import {
  selectUserInfo,
  selectUserSpace,
  selectUserStories,
} from "../../store/mySpace/mySpaceSelectors";

function MySpace() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const space = useSelector(selectUserSpace);
  const stories = useSelector(selectUserStories);

  console.log("WHAT IS USER?", user);
  console.log("WHAT IS SPACE?", space);
  console.log("WHAT IS STORIES", stories);

  useEffect(() => {
    dispatch(fetchUserSpace());
  }, [dispatch]);

  return (
    <div className="MySpace">
      <Jumbotron>
        <h1>My Space</h1>
      </Jumbotron>
      <div className="MySpace-container">
        <div className="MySpace-buttons">
          <button>Edit My Space</button>
          <button>Post a cool story bro</button>
        </div>
        <div className="MySpace-stories">
          <div className="MySpace-stories">
            <h2 className="MySpace-stories-title">Story Title</h2>
            <img className="MySpace-stories-image" src="/" alt="Story" />
            <p className="MySpace-stories-content">Content</p>
            <p className="MySpace-stories-timestamp">TimeStamp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySpace;
