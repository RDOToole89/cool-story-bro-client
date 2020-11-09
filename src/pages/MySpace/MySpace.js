import React from "react";
import "./MySpace.css";
import { Jumbotron } from "react-bootstrap";

function MySpace() {
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
