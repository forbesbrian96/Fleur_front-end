import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarRating = (props) => {

  const [rating, setRating] = useState([]);
  const [hover, setHover] = useState();

  useEffect(() => {
    axios.get(`/api/plants/${props.plantId}/ratings/`)
      .then(response => {
        setRating(response.data);
      })
      .catch(error => console.error(error));
  }, [props.plantId]);

  const updateRating = async (newRating) => {
    try {
      const response = await axios.put(`/api/plants/${props.plantId}/ratings/${props.rating.id}/`, { rating: newRating });
      setRating(rating.map((r) => r.id === props.rating.id ? { ...r, rating: newRating } : r));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            type="button"
            key={index}
            className={ratingValue <= (hover || props.rating.rating) ? "on" : "off"}
            onClick={() => updateRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(props.rating.rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
