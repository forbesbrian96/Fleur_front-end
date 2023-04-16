import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'

// import StarRating from './StarRating';


const App = (props) => {
  
  let [plant, setPlant] = useState([])
  let [rating, setRating] = useState([])

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

  // useEffect(() => {
  //   fetch(`/api/plants/${props.match.params.id}/`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPlant(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  //   fetch(`/api/plants/${props.match.params.id}/rating/average/`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRating(data.average_rating);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [props.match.params.id]);

  return (
    <>
      <h1>La Fleur</h1>
      <Add handleCreate={handleCreate}/>
      <div>
          {
            plant.map((plant) => {
              return (
                <div key={plant.id}>
                    <h4>{plant.header}</h4>
                    <img src={plant.image} alt={plant.name} width="400" height="400"/>
                    <p>{plant.text}</p>
                    {/* <h4>{rating}</h4> */}
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