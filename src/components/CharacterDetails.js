import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CharacterDetails(props) {
  const { characterId } = useParams();

  const navigate = useNavigate();

  const [details, setDetails] = useState({});


  useEffect(() => {
    axios.get("https://ih-crud-api.herokuapp.com/characters/" + characterId)
      .then( response => {
        setDetails(response.data);
      })
      .catch(e => console.log("error getting characters from API", e));
  }, []);


  const deleteCharacter = () => {
    axios.delete("https://ih-crud-api.herokuapp.com/characters/" + characterId)
      .then( response => {
        props.callbackToFetchCharacters();
        navigate("/");
      })
      .catch(e => console.log("error deleting characters", e));
  }


  return (
    <div>
      <h3>Name: {details.name}</h3>
      <p>Occupation: {details.occupation}</p>

      <button onClick={deleteCharacter}>DELETE THIS CHARACTER</button>
    </div>
  );
}

export default CharacterDetails;
