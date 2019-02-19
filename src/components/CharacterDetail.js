import React from "react";

const CharacterDetail = ({character}) => {
  if(!character) return null;
  return (
    <div>
      <h2>{character.name}</h2>
      <h3>{character.house}</h3>
    </div>
  )
}




export default CharacterDetail;
