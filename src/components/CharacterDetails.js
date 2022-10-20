import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetails() {
  const { characterId } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    axios.get("https://ih-crud-api.herokuapp.com/characters/" + characterId)
      .then( response => {
        setDetails(response.data);
      })
      .catch(e => console.log("error getting characters from API", e));
  }, []);

  return (
    <div>
      <h3>Name: {details.name}</h3>
      <p>Occupation: {details.occupation}</p>
    </div>
  );
}

export default CharacterDetails;
