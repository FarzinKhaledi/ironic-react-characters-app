import {Routes, Route, Link} from "react-router-dom";

function CharactersList(props) {
  return(
    <>
      <h2>List of characters in our API:</h2>

      {props.characters.map( (character) => {
      return (
        <div className="box">
          <h3>{character.name}</h3>
          <p>Occupation {character.occupation}</p>

          <Link to={`/characters/${character.id}`}>More details</Link>
        </div>
        );
      })}
    </>
  );
}

export default CharactersList;
