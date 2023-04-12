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
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={plant.name}
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
          <label htmlFor="notes">Notes: </label>
          <input
            type="text"
            name="notes"
            value={plant.notes}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit
