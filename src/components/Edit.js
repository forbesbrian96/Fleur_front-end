import React, { useState } from 'react'
import axios from 'axios';

const Edit = (props) => {

  const [plant, setPlant] = useState({...props.plant});

  const getPlant = () => {
    axios
    .get('https://secure-journey-08415.herokuapp.com/api/plants')
    .then((response) => setPlant(response.data), (err) => console.log(err))
  }

  const handleUpdate = (editPlant) => {
    console.log(editPlant)
    axios
      .put('https://secure-journey-08415.herokuapp.com/api/plants/' + editPlant.id, editPlant)
      .then((response) => {
        getPlant()
      })
  }

  const handleChange = (event) => {
    setPlant({ ...plant, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleUpdate(plant)
  }

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
          <input type="submit" />
        </form>
      </details>
    </>
  )
}
export default Edit