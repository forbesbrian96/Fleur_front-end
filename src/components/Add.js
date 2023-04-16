import React, { useState, useEffect } from 'react'
import StarRating from './StarRating';


//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
  let emptyPlant = { header: '', image: '', text: '', rating: '' }
  const [plant, setPlant] = useState(emptyPlant)
  const [rating, setRating] = useState(props.rating);


  const handleChange = (event) => {
    setPlant({ ...plant, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(plant)
  }

  // const handleStarClick = (index) => {
  //   const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  //   const newRating = index + 1;
  //   setRating(newRating);
  //   const data = {
  //     rating: newRating,
  //   };
  //   fetch(`/api/plants/${plant.id}/rating/`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-CSRFToken': csrftoken,
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  useEffect(() => {
    fetch(`/api/plants/${plant.id}/`)
      .then((response) => response.json())
      .then((data) => {
        setPlant(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [plant.id]);
  
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
        {/* <StarRating rating={plant.average_rating()} onStarClick={handleStarClick} /> */}
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add