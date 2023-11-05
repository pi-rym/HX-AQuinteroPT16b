import { Link } from 'react-router-dom';

export default function Card({
  onClose,
  name,
  status,
  origin,
  gender,
  image,
  species,
  id,
}) {
  // console.log(props);
  return (
    <div>
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <h2>{status}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
