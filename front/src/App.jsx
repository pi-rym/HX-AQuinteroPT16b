import axios from 'axios';
import { useState, useMemo, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About.jsx';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Detail from './components/Detail.jsx';
import Error from './components/Error.jsx';
import Form from './components/Form.jsx';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const { pathname } = useLocation();

  const APIKEY = 'pi-hx-aquintero';
  const EMAIL = 'mail@mail.com';
  const PASSWORD = 'hola123';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    } else {
      window.alert('Email o password incorrecta');
    }
  }

  function logout() {
    setAccess(false);
    navigate('/');
  }

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

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div className='App'>
      {pathname !== '/' && <Navbar onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
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
