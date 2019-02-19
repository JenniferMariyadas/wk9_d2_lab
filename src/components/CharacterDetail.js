import React from "react";

const CharacterDetail = ({character}) => {
  if(!character) return null;
  return (
    <h2>
      {character.name}
    </h2>
      <h3>
      {character.house}
      </h3>
  )
}




export default CharacterDetail;
