import React, { useState } from "react";
import { Rating } from 'react-simple-star-rating';

export default function Start() {
    const [rating, setRating] = useState(0) // initial rating value
  
    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
      // Some logic
     
    }
  
    return (
      <div className='App'>
        <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
        {rating}
      </div>
    )
  }
 