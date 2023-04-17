import React, {useState, useEffect} from 'react'
import './App.css'
import { Link, Routes, Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Plant from './components/Plant'
import Add from './components/Add'

const App = () => {

  let [plant, setPlant] = useState([])
  const { id } = useParams();

  const handleCreate = (addplant) => {
    axios
    .post('http://localhost:8000/api/plants', addplant)
    .then((response) => {
      console.log(response)
      getPlant()
    })
  }

  const getPlant = () => {
    axios
    .get('http://localhost:8000/api/plants')
    .then((response) => setPlant(response.data), (err) => console.log(err))
  }

  const handleUpdate = (editPlant) => {
    console.log(editPlant)
    axios
      .put('http://localhost:8000/api/plants/' + editPlant.id, editPlant)
      .then((response) => {
        getPlant()
      })
  }

  const handleDelete = (event) => {
    axios
    .delete('http://localhost:8000/api/plants/' + event.target.value)
    .then((response) => {
      getPlant()
    })
  }

  useEffect(() => {
    getPlant()
  }, [])

  return (
    <>
      <nav>
        <ul>
          <li><Link to='/api/plants'>Home</Link></li>
          <li><Link to='/api/plants/new'>New Plant</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/api/plants' element={<Home plant={plant} getPlant={getPlant} handleCreate={handleCreate} />} />
        <Route path='/api/plants/plant/:id' element={<Plant plant={plant} getPlant={getPlant} handleUpdate={handleUpdate} handleDelete={handleDelete} />} />
        <Route path='/api/plants/new' element={<Add handleCreate={handleCreate}/>} />
      </Routes>

     
    </>
  )
}

export default App