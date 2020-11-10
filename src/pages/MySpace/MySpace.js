import React, { useEffect } from "react";
import "./MySpace.css";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSpace } from "../../store/mySpace/mySpaceActions";
import { selectUserSpace, selectUserStories } from "../../store/mySpace/mySpaceSelectors";
import SpaceStoryWithDelete from "../../components/SpaceStoryWithDelete/SpaceStoryWithDelete";
import { useHistory } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";

function MySpace() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(selectToken);
  const space = useSelector(selectUserSpace);
  const stories = useSelector(selectUserStories);

  useEffect(() => {
    dispatch(fetchUserSpace());
    if (token === null) {
      history.push("/");
    }
  }, [dispatch, token, history]);

  const styles = {
    backgroundColor: space?.backgroundColor,
    color: space?.color,
  };

  const goToCreatePost = (e) => {
    e.preventDefault();
    history.push("/myspace/post");
  };

  const goToEditProfile = (e) => {
    e.preventDefault();
    history.push("/myspace/profile");
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
            <button className="MySpace-btn" onClick={goToEditProfile}>
              Edit My Space
            </button>
            <button className="MySpace-btn" onClick={goToCreatePost}>
              Post a cool story bro
            </button>
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
