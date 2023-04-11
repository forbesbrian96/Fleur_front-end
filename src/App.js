import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {

  let [plant, setPlant] = useState([])

  const handleCreate = (addplant) => {
    axios
    .post('http://localhost:800/api/plant', addplant)
    .then((response) => {
      console.log(response)
      getPlant()
    })
  }

  const getPlant = () => {
    axios
    .get('http://localhost:8000/api/plant')
    .then((response) => setPlant(response.data), (err) => console.log(err))
  }

  const handleUpdate = (editPlant) => {
    console.log(editPlant)
    axios
      .put('http://localhost:8000/api/plant/' + editPlant.id, editPlant)
      .then((response) => {
        getPlant()
      })
  }

  const handleDelete = (event) => {
    axios
    .delete('http://localhost:8000/api/plant' + event.target.value)
    .then((response) => {
      getPlant()
    })
  }

  useEffect(() => {
    getPlant()
  }, [])

  return (
    <>
      <h1>La plant</h1>
      <Add handleCreate={handleCreate}/>
      <div class='flower-box'>
          {
            plant.map((plant) => {
              return (
                <div key={plant.id}>
                    <h4>{plant.name}</h4>
                    <h5>{plant.family}</h5>
                    <Edit handleUpdate={handleUpdate} plant={plant} />
                    <button onClick={handleDelete} value={plant.id}>
                      X
                    </button>
                </div>
              )
            })
          }
      </div>
    </>
  )
}

export default App