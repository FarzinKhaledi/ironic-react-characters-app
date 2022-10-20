import axios from 'axios';
import {Routes, Route, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css';
import CharacterDetails from './components/CharacterDetails';
import CharactersList from './components/CharactersList';

function App() {

  const [charactersArr, setCharactersArr] = useState([]);

  useEffect(() => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
      .then( response => {
        setCharactersArr(response.data);
      })
      .catch(e => console.log("error getting characters from API", e));
  }, []);


  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<CharactersList characters={charactersArr} />} />
          <Route path='/characters/:characterId' element={<CharacterDetails />} />
        </Routes>



    </div>
  );

}

export default App;
