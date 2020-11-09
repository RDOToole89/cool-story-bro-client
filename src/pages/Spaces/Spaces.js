import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch } from "react-redux";
import SpacesFeed from "../../components/SpacesFeed/SpacesFeed";
import { fetchUserSpace } from "../../store/mySpace/mySpaceActions";
import { fetchSpaces } from "../../store/space/spaceActions";

function Spaces() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaces());
    dispatch(fetchUserSpace());
  }, [dispatch]);

  return (
    <div className="Spaces">
      <Jumbotron>
        <h1>Spaces</h1>
      </Jumbotron>
      <SpacesFeed />
    </div>
  );
}

export default Spaces;
