import React from 'react';

const HouseSelector = (props) => {
  const options = props.houses.map((house, index) => {
    return <option value={house} key={index}>{house}</option>
  })

function handleChange(event){
  props.handleHouseSlected(event.target.value);
}
  return(
    <select onChange={handleChange}>
      {options}
    </select>
  )
}

export default HouseSelector;
