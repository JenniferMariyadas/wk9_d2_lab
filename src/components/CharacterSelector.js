import React from 'react';

const CharacterSelector = (props) => {
  const options = props.characters.map((character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  })

  function handleChange(event){
    props.handleCharacterSelected(event.target.value);
  }

  return(
    <select onChange={handleChange}>
      {options}
    </select>
  )
}

export default CharacterSelector;
