import React, { useState } from 'react'

const Edit = (props) => {
  
  const [plant, setPlant] = useState({...props.plant});

  const handleChange = (event) => {
    setPlant({ ...plant, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(plant)
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
