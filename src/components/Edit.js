import React, { useState, useEffect } from 'react'
import StarRating from './StarRating';


const Edit = (props) => {
  
  const [plant, setPlant] = useState({...props.plant});
  const [rating, setRating] = useState(props.rating);


  const handleChange = (event) => {
    setPlant({ ...plant, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(plant)
  }

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
          {/* <StarRating rating={plant.average_rating()} /> */}
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit