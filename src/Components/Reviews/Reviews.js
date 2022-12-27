import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import "./Reviews.css"
const Reviews = () => {
    const reviews = useReviews();
    return (
       <div className="reviews">
         <div className='reviews-container'>
            {
                reviews.map(review=> <Review review={review} key={review.id}></Review>)
            }

        </div>
       </div>
    );
};

export default Reviews;