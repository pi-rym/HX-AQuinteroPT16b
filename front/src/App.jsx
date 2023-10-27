import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Navbar from './components/Navbar';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]); // [estado local, funcion para modificar el estado local]

  const APIKEY = 'pi-hx-aquintero';

  function onSearch(id) {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  }

  return (
    <div className='App'>
      <Navbar onSearch={onSearch} />
      <hr />
      <Cards characters={characters} onClose={onClose} />
      <hr />
    </div>
  );
}

export default App;

// [characters, setCharacters] = [estado, funcion]
//characters = ['Alejo', 'Karlos', 'Danilo', 'Cesar']
//setCharacters = funcion
