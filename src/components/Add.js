import React, { useState } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
  let emptyPlant = { header: '', image: '', text: '' }
  const [plant, setPlant] = useState(emptyPlant)
  const [rating, handleRatingChange] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlant({...plant, [name]: value });
  }

  const StarRating = ({ rating, onRatingChange }) => {
    const [currentRating, setCurrentRating] = useState(rating);
  
    const handleClick = (newRating) => {
      setCurrentRating(newRating);
      onRatingChange(newRating);
    };
  
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < currentRating) {
        stars.push(
          <i key={i} className="fas fa-star" onClick={() => handleClick(i + 1)}></i>
        );
      } else {
        stars.push(
          <i key={i} className="far fa-star" onClick={() => handleClick(i + 1)}></i>
        );
      }
    }
  
    return <div className="star-rating">{stars}</div>;
  };
  


  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(plant)
  }
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="header">Name: </label>
        <input 
        type="text" 
        name="header" 
        value={plant.header} 
        onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="image">Image: </label>
        <input 
        type="text" 
        name="image" 
        value={plant.image} 
        onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="text">Notes: </label>
        <input 
        type="text" 
        name="text" 
        value={plant.text} 
        onChange={handleChange}/>
        <br />
      {/* star rating */}
        <label htmlFor="rating">Rating: </label>
        <div id="rating">
          <input 
            type="radio" 
            id="star5" 
            name="rating" 
            value="5" 
            onChange={handleRatingChange}
            checked={plant.rating === '5'}
          />
          <label htmlFor="star5" title="5 stars">
            <i className="fa fa-star"></i>
          </label>
          <input 
            type="radio" 
            id="star4" 
            name="rating" 
            value="4" 
            onChange={handleRatingChange}
            checked={plant.rating === '4'}
          />
          <label htmlFor="star4" title="4 stars">
            <i className="fa fa-star"></i>
          </label>
          <input 
            type="radio" 
            id="star3" 
            name="rating" 
            value="3" 
            onChange={handleRatingChange}
            checked={plant.rating === '3'}
          />
          <label htmlFor="star3" title="3 stars">
            <i className="fa fa-star"></i>
          </label>
          <input 
            type="radio" 
            id="star2" 
            name="rating" 
            value="2" 
            onChange={handleRatingChange}
            checked={plant.rating === '2'}
          />
          <label htmlFor="star2" title="2 stars">
            <i className="fa fa-star"></i>
          </label>
          <input 
            type="radio" 
            id="star1" 
            name="rating" 
            value="1" 
            onChange={handleRatingChange}
            checked={plant.rating === '1'}
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
          {/* star rating end */}

        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
