import React, { useState } from 'react'

const Add = (props) => {
  let emptyPlant = { header: '', image: '', text: '' }
  const [plant, setPlant] = useState(emptyPlant)

  const handleChange = (event) => {
    setPlant({ ...plant, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(plant)
  }
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="header">Name: </label>
        <input type="text" name="header" value={plant.header} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="image">Image: </label>
        <input type="text" name="image" value={plant.image} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="text">Notes: </label>
        <input type="text" name="text" value={plant.text} onChange={handleChange} />
        <input type="submit" />
      </form>
    </>
  )
}

export default Add
