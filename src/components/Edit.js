import React, { useState } from 'react'

const Edit = (props) => {
  let emptyPlant = { name: '', image: '' }
  const [plant, setPlant] = useState(emptyPlant)

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
            type="number"
            name="image"
            value={plant.image}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit
