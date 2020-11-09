import React from "react";
import "./SpaceDetails.css";

function SpaceDetails() {
  return (
    <div className="SpaceDetails">
      <div className="SpaceDetails-headerbox">
        <h1 className="SpaceDetails-header">Born And Raiser in Phill</h1>
        <h3 className="SpaceDetails-subheader">How I became the prince of Bel Air</h3>
      </div>
      <div className="SpaceDetails-main">
        <img
          src="https://images.unsplash.com/photo-1604756463129-11ef41b00d56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          className="SpaceDetails-image"
          alt="profile"
        />
      </div>
    </div>
  );
}

export default SpaceDetails;
