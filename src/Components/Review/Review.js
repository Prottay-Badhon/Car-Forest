import React, { useEffect, useState } from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Review = (props) => {
  const { id, name, image, rating, comment } = props.review;
  const stars=[]
  for(let i=0;i<rating;i++){
    stars.push(i);
  }
  return (
    <div className="review">
      <div className="review-img-container">
        <img src={image} alt="" className="review-img" />
      </div>
      <div className="review-description">
        <h2>{name}</h2>
        <p>{comment}</p>
        <div className="review-star">
          {stars.map(star=><FontAwesomeIcon icon={faStar} className="star-icon"></FontAwesomeIcon>)}
        </div>
      </div>
    </div>
  );
};

export default Review;
