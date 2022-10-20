import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

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
       <h2>List of characters in our API:</h2>


       {charactersArr.map( (character) => {
        return (
          <div className="box">
            <h3>{character.name}</h3>
            <p>Occupation {character.occupation}</p>
          </div>
          );
       })}

    </div>
  );

}

export default App;
