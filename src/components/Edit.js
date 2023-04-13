import React, { useState } from 'react'

const Edit = (props) => {
  const [plant, setPlant] = useState({ ...props.plant });
  const [rating, handleRatingChange] = useState([])

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === 'rating') {
      setPlant({ ...plant, [name]: parseInt(value) });
    } else {
      setPlant({ ...plant, [name]: value });
    }
  };

  const StarRating = ({ rating, onRatingChange }) => {
    const [currentRating, setCurrentRating] = useState(rating);
  
    const handleClick = (newRating) => {
      setCurrentRating(newRating);
      onRatingChange(newRating);
    };
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleUpdate(plant);
  };

  return (
    <>
      <details>
        <summary>Edit Plant</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="header">Name: </label>
          <input
            type="text"
            name="header"
            value={plant.header}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="image">Image: </label>
          <input
            type="text"
            name="image"
            value={plant.image}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="text">Notes: </label>
          <input
            type="text"
            name="text"
            value={plant.text}
            onChange={handleChange}
          />
          <br />
          {/* star rating  */}
          <label htmlFor="rating">Rating: </label>
          <div id="rating">
            <input
              type="radio"
              id="star5"
              name="rating"
              value="5"
              checked={plant.rating === 5}
              onChange={handleChange}
            />
            <label htmlFor="star5" title="5 stars">
              <i className="fa fa-star"></i>
            </label>
            <input
              type="radio"
              id="star4"
              name="rating"
              value="4"
              checked={plant.rating === 4}
              onChange={handleChange}
            />
            <label htmlFor="star4" title="4 stars">
              <i className="fa fa-star"></i>
            </label>
            <input
              type="radio"
              id="star3"
              name="rating"
              value="3"
              checked={plant.rating === 3}
              onChange={handleChange}
            />
            <label htmlFor="star3" title="3 stars">
              <i className="fa fa-star"></i>
            </label>
            <input
              type="radio"
              id="star2"
              name="rating"
              value="2"
              checked={plant.rating === 2}
              onChange={handleChange}
            />
            <label htmlFor="star2" title="2 stars">
              <i className="fa fa-star"></i>
            </label>
            <input
              type="radio"
              id="star1"
              name="rating"
              value="1"
              checked={plant.rating === 1}
              onChange={handleChange}
            />
            <label htmlFor="star1" title="1 star">
              <i className="fa fa-star"></i>
              </label>
          <input 
          type="radio" 
            id="star0" 
            name="rating" 
            value="0" 
            onChange={handleRatingChange}
            checked={plant.rating === '0'}
          /></div>
          {/* star rating end  */}
          <br />
          <input type="submit" />
        </form>
      </details>
    </>
  );
};

export default Edit
