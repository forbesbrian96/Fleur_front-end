import React, { useState } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
  let emptyPlant = { name: '', age: '' }
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
        <label htmlFor="name">Name: </label>
        <input 
        type="text" 
        name="name" 
        value={plant.name} 
        onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="family">Family: </label>
        <input 
        type="text" 
        name="family" 
        value={plant.family} 
        onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
