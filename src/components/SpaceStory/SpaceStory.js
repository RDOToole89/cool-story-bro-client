import React from "react";
import "./SpaceStory.css";

function SpaceStory(props) {
  // console.log("WHAT IN THE PROPS?", props);

  const { name, image, content, createdAt } = props;

  return (
    <div className="SpaceStory">
      <h2 className="SpaceStory-title">{name}</h2>
      <img className="SpaceStory-image" src={image} alt="Story" />
      <p className="SpaceStory-content">{content}</p>
      <p className="SpaceStory-timestamp">{createdAt}</p>
    </div>
  );
}

export default SpaceStory;
