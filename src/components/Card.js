import React from "react";

const Card = ({ title, description, image, extraContent }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      {extraContent && <div className="card-extra">{extraContent}</div>}
    </div>
  );
};

export default Card;
