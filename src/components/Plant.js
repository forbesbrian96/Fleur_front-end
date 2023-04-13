import { useParams } from 'react-router-dom';

const Plant = () => {
  const { id } = useParams();

  return (
    <>
    <h1>This is the Show Page! You did it!</h1>

    </>
  );
};

export default Plant;