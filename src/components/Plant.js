import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Edit from './Edit';

const Plant = (props) => {
  let [plant, setPlant] = useState([])
  const { id } = useParams();

  const getPlant = () => {
    axios
    .get('http://localhost:8000/api/plants/' + id)
    .then((response) => 
    setPlant(response.data), (err) => console.log(err))
    
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
    <h1>This is the Show Page! You did it!</h1>
    <h2>{id}</h2>

    <div className="flower-box">

        {/* {props.plant.map((plant) => { */}
          {/* return ( */}
            <div key={plant.id}>           
              {/* { plant.id == {id} ?    */}
            
              <h4>{plant.header}</h4>
              <h4>{plant.id}</h4>
              <img
                src={plant.image}
                alt={plant.header}
                width="400"
                height="400"
              />
              <h5>{plant.text}</h5>
              <Edit plant={plant} />
              <button onClick={handleDelete} value={plant.id}>
                X
              </button>
             
         {/* : null } */}
            </div>
          {/* ); */}
        {/* })} */}
      </div>
    </>
  );
};

export default Plant;