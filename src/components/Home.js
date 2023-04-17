

const Home = (props) => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Cardo:ital@1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
      </style>

      <div className="header">
        <h1>fleur</h1>
      </div>

      <div className="flower-box">
        {props.plant.map((plant) => {
          return (
            <>
            <div className="card" key={plant.id}>
              <h4>{plant.header}</h4>
              {/* <h4>{plant.id}</h4> */}
              <img
                src={plant.image}
                alt={plant.header}
                width="325"
                height="300"
              />
              <br />
              <a href={`/api/plants/plant/${plant.id}`}>notes</a>
            </div>
            <br/>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
