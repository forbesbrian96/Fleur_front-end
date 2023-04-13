import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import CSS from './App.css'
import '@fortawesome/fontawesome-free/css/all.css';



const App = () => {

  let [plant, setPlant] = useState([])

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

  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return <div className="star-rating">{stars}</div>;
  };
  

  useEffect(() => {
    getPlant()
  }, [])

  return (
    <>
      <h1>La plant</h1>
      <Add handleCreate={handleCreate}/>
      <div className='flower-box'>
          {
            plant.map((plant) => {
              return (
                <div key={plant.id}>
                    <h4>{plant.header}</h4>
                    <img src={plant.image} alt={plant.name} width="400" height="400"/>
                    <p>{plant.text}</p>
                    
                    <div className='container'>
                    <StarRating rating={plant.rating} />
                    </div>

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