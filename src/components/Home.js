import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './Add'
import Edit from './Edit'
import Plant from './Plant'

const Home = (props) => {
  let [plant, setPlant] = useState([])

  return (
    <>
      <h1>La plant</h1>
      {/* <Add handleCreate={handleCreate} /> */}
      {props.plant.map((plant) => {
          return (
            <div key={plant.id}>
              <h4>{plant.header}</h4>
              <h4>{plant.id}</h4>
              <img
                src={plant.image}
                alt={plant.header}
                width="400"
                height="400"
              />  
              <a href={`/api/plants/plant/${plant.id}`}>CLICK</a>
            </div>
          );
        })}
    </>
  );
}

export default Home;