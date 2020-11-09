import React from "react";
import "./SpaceCard.css";

function SpaceCard(props) {
  const { id, title, description, color, backgroundColor } = props;
  const styles = {
    backgroundColor: backgroundColor,
    color: color,
  };

  return (
    <div key={id} style={styles} className="SpaceCard">
      <h1 className="SpaceCard-header">{title}</h1>
      <p className="SpaceCard-text">{description}</p>
      <button className="SpaceCard-btn">Visit Space</button>
    </div>
  );
}

export default SpaceCard;
