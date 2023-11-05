import axios from 'axios';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Detail from './components/Detail.jsx';
import Error from './components/Error.jsx';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

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
      <Routes>
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
