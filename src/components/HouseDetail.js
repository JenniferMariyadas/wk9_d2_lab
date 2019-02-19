import React from "react";

const HouseDetail = ({house}) => {
  if(!house) return null;
  const charactersByHouse = function() {
    this.props.characters.filter((character, {house}) => {
      if (character.house === {house})
      return character
    })
  }

  return(
    <div>
      {charactersByHouse}
    </div>
  )
}




export default HouseDetail;
