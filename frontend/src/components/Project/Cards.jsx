import React from "react";
import "../../Styles/Project.css";
import { Link } from "react-router-dom";
const Cards = ({ image, heading,text,exploreMore }) => {
  return (
    <div class="card">
      <img src={image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 className="card-title">{heading}</h5>
        <p class="card-text">
          {text}
        </p>
        <Link to={exploreMore}>
        <button class="button" >
          Explore More...
          <div class="hoverEffect">
            <div></div>
          </div>
        </button></Link>
        
      </div>
    </div>
  );
};

export default Cards;
