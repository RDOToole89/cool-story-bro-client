import React from "react";
import "./SpaceStoryWithDelete.css";

function SpaceStoryWithDelete(props) {
  // console.log("WHAT IN THE PROPS?", props);

  const { name, image, content, createdAt } = props;

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="SpaceStory">
      <h2 className="SpaceStory-title">{name}</h2>
      <img className="SpaceStory-image" src={image} alt="Story" />
      <p className="SpaceStory-content">{content}</p>
      <p className="SpaceStory-timestamp">{createdAt}</p>
      <button onClick={handleClick} class="SpaceStoryDel-btn">
        Delete
      </button>
    </div>
  );
}

export default SpaceStoryWithDelete;
