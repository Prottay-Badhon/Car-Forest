import React, { useEffect, useState }  from 'react';
import Review from '../Review/Review';
import "./Reviews.css"
const Reviews = () => {
    const[reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch("Reviews.json")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
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