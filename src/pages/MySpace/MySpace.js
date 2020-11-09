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
import SpaceStoryWithDelete from "../../components/SpaceStoryWithDelete/SpaceStoryWithDelete";
import { useHistory } from "react-router-dom";
import _ from "lodash";

function MySpace() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUserInfo);
  const space = useSelector(selectUserSpace);
  const stories = useSelector(selectUserStories);

  console.log("WHAT IS USER?", user);
  // console.log("WHAT IS SPACE?", space);
  // console.log("WHAT IS STORIES", stories);

  useEffect(() => {
    dispatch(fetchUserSpace());
  }, [dispatch]);

  if (_.isEmpty(user)) {
    history.push("/");
  }

  const styles = {
    backgroundColor: space?.backgroundColor,
    color: space?.color,
  };

  const createPost = (e) => {
    e.preventDefault();
    history.push("/myspace/post/");
  };

  return (
    <div style={styles} className="MySpace">
      <Jumbotron className="MySpace-jumbo">
        <h1 className="MySpace-jumbo-header">{space?.title}</h1>
        <h3 className="MySpace-jumbo-subheader">{space?.description}</h3>
      </Jumbotron>
      {!space ? (
        <h1>Loading...</h1>
      ) : (
        <div className="MySpace-container">
          <div className="MySpace-buttons">
            <button>Edit My Space</button>
            <button onClick={createPost}>Post a cool story bro</button>
          </div>
          <div className="MySpace-stories">
            {stories?.map((story) => (
              <SpaceStoryWithDelete
                key={story.id}
                id={story.id}
                image={story.imageUrl}
                name={story.name}
                content={story.content}
                createdAt={story.createdAt}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MySpace;

// <div className="MySpace-stories">
// <div className="MySpace-stories">
//   <h2 className="MySpace-stories-title">Story Title</h2>
//   <img className="MySpace-stories-image" src="/" alt="Story" />
//   <p className="MySpace-stories-content">Content</p>
//   <p className="MySpace-stories-timestamp">TimeStamp</p>
// </div>
