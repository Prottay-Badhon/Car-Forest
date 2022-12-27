import React from 'react';
import Review from '../Review/Review';
import "./Reviews.css"
const Reviews = () => {
    return (
       <div className="reviews">
         <div className='reviews-container'>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>

        </div>
       </div>
    );
};

export default Reviews;