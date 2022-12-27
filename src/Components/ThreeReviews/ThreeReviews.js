import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useReviews from "../../Hooks/useReviews";
import Review from "../Review/Review";
import "./ThreeReviews.css";
const ThreeReviews = () => {
    const reviews = useReviews();
  let command;
  if (reviews.length > 3) {
    command = (
      <div>
        <Link to="/reviews" style={{ textDecoration: "none" }}>
          <button className="all-review-btn">See all reviews...</button>
        </Link>
      </div>
    );
  } else {
    command = (
      <div>
        <p>Hope for more reviews</p>
      </div>
    );
  }
  return (
    <div className="three-review">
      <div className="">
        <div className="review-container-3">
          {reviews.map(
            (review, index) => index < 3 && <Review review={review}></Review>
          )}
        </div>
        <div className="command-container">{command}</div>
      </div>
    </div>
  );
};

export default ThreeReviews;
