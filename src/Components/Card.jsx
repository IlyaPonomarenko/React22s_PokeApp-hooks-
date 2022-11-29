import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";


const Card = ({image, name}) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={image} alt="pokemon.png" />
      </div>
      <div className="card-text">
        <Link to={`${name}`}> <h2>{name}</h2></Link>
        <div className="icons">
        </div>
      </div>
    </div>
  );
};

export default Card;
