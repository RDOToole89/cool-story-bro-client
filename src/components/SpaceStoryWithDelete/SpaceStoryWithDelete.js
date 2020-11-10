import React from "react";
import { useDispatch } from "react-redux";
import { deleteStory, fetchUserSpace } from "../../store/mySpace/mySpaceActions";
import "./SpaceStoryWithDelete.css";

function SpaceStoryWithDelete(props) {
  const dispatch = useDispatch();

  const { name, image, content, createdAt, id } = props;

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(deleteStory(id));
    dispatch(fetchUserSpace());
  };

  return (
    <div className="SpaceStory">
      <h2 className="SpaceStory-title">{name}</h2>
      <img className="SpaceStory-image" src={image} alt="Story" />
      <p className="SpaceStory-content">{content}</p>
      <p className="SpaceStory-timestamp">{createdAt}</p>
      <button onClick={handleClick} className="SpaceStoryDel-btn">
        Delete
      </button>
    </div>
  );
}

export default SpaceStoryWithDelete;
