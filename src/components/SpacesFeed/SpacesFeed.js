import React from "react";
import { useSelector } from "react-redux";
import { allSpaces } from "../../store/space/spaceSelectors";
import SpaceCard from "./SpaceCard";
import "./SpacesFeed.css";

function SpacesFeed() {
  const spaces = useSelector(allSpaces);

  return (
    <div className="SpacesFeed">
      {!spaces ? (
        <h1>Loading..</h1>
      ) : (
        spaces.map((space) => (
          <SpaceCard
            key={space.id}
            id={space.id}
            title={space.title}
            description={space.description}
            color={space.color}
            backgroundColor={space.backgroundColor}
          />
        ))
      )}
    </div>
  );
}

export default SpacesFeed;
