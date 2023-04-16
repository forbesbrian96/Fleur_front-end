// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StarRating = (props) => {

//   const [rating, setRating] = useState(0);

//   const handleStarClick = (index) => {
//     setRating(index + 1);
//   };
  
//   const stars = [];
//   for (let i = 0; i < 5; i++) {
//     const starClass = i < rating ? "star filled" : "star";
//     stars.push(
//       <span
//         key={i}
//         className={starClass}
//         onClick={() => handleStarClick(i)}
//       ></span>
//     );
//   }

  
//   function PlantDetail(props) {
//     const plant = props.plant;
//     const rating = plant.average_rating();
  
//     return (
//       <div>
//         <h1>{plant.header}</h1>
//         <img src={plant.image} alt="" />
//         <p>{plant.text}</p>
//         <StarRating rating={rating} />
//       </div>
//     );
//   }
  



// }
// export default StarRating;
