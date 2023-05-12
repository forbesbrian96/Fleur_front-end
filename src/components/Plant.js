import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Edit from "./Edit";
const Plant = (props) => {
  let [plant, setPlant] = useState([]);
  const { id } = useParams();
  const getPlant = () => {
    axios.get("https://secure-journey-08415.herokuapp.com/api/plants/" + id).then(
      (response) => setPlant(response.data),
      (err) => console.log(err)
    );
  };
  const handleUpdate = (editPlant) => {
    console.log(editPlant)
    axios
      .put('https://secure-journey-08415.herokuapp.com/api/plants/' + editPlant.id, editPlant)
      .then((response) => {
        getPlant()
      })
  }
  const handleDelete = (event) => {
    axios
      .delete("https://secure-journey-08415.herokuapp.com/api/plants/" + event.target.value)
      .then((response) => {
        getPlant();
      });
  };
  useEffect(() => {
    getPlant();
  }, []);

  return (
    <>
      {/* <div> */}
        <div className="card" key={plant.id}>
          <h4>{plant.header}</h4>
          <img src={plant.image} alt={plant.header} width="400" height="400" />
          <h5>{plant.text}</h5>
          <Edit plant={plant} />
          <br/>
          <button onClick={handleDelete} value={plant.id}>
            Remove Plant
          </button>
          <br/>
        </div>
      {/* </div> */}
    </>
  );
};
export default Plant;