import React from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Review = () => {
  return (
      <div className="review">
        <div className="review-img-container">
          <img src="images/car2.jpeg" alt="" className="review-img" />
        </div>
        <div className="review-description">
          <h2>Reviewer Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            accusamus, quisquam officiis quis aspernatur beatae rem aliquam
            facilis
          </p>
          <div className="review-star">
            <FontAwesomeIcon icon={faStar} className="star-icon"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="star-icon"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="star-icon"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="star-icon"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="star-icon"></FontAwesomeIcon>

            
          </div>
        </div>
      </div>
  );
};

export default Review;
