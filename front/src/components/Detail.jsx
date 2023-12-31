import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  const APIKEY = 'pi-hx-aquintero';

  useEffect(() => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      {character.name && (
        <>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <h2>{character.status}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.origin?.name}</h2>
        </>
      )}
    </div>
  );
};

export default Detail;
