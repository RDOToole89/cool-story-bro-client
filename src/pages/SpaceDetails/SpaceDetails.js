import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SpaceStory from "../../components/SpaceStory/SpaceStory";
import { fetchSpaceById } from "../../store/space/spaceActions";
import { singleSpace, selectStories } from "../../store/space/spaceSelectors";

import "./SpaceDetails.css";

function SpaceDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const space = useSelector(singleSpace);
  const stories = useSelector(selectStories);
  console.log("WHATS IN SPACE?", space);
  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch, id]);

  const styles = {
    backgroundColor: space.backgroundColor,
    color: space.color,
  };

  if (!stories) {
    return <h1>Loading...</h1>;
  }

  //REFERENCED: https://stackoverflow.com/questions/44582097/how-to-sort-array-by-date
  const sortedStories = [...stories].sort(
    (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
  );

  return (
    <div style={styles} className="SpaceDetails">
      <div className="SpaceDetails-headerbox">
        <h1 className="SpaceDetails-header">{space.title}</h1>
        <h3 className="SpaceDetails-subheader">{space.description}</h3>
      </div>
      <div className="SpaceDetails-main">
        {!space.stories ? (
          <h1>Loading...</h1>
        ) : (
          sortedStories?.map((story) => (
            <SpaceStory
              key={story.id}
              name={story.name}
              image={story.imageUrl}
              content={story.content}
              createdAt={story.createdAt}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default SpaceDetails;
