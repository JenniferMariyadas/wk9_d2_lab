import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';
import HouseSelector from '../components/HouseSelector';
import HouseDetail from '../components/HouseDetail';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null,
      houses: [],
      currentHouse: null
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
    this.handleHouseSelected = this.handleHouseSelected.bind(this);
    this.listHouses = this.listHouses.bind(this);
  }

   componentDidMount () {
    const url = 'http://hp-api.herokuapp.com/api/characters';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState(
        {characters: data,
        houses: this.listHouses(data)}
      )
    });

    request.send();
  };

  listHouses(data){
    const houses = data.map((character) => {
      return character.house
    })

    const uniqueHouses = new Set(houses);
    const unique = Array.from(uniqueHouses);
    return unique;
  }

  handleCharacterSelected(index){
    const selectedCharacter = this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter});
  }

  handleHouseSelected(house){
    const selectedHouse = this.state.houses[house];
    this.setState({currentHouse: selectedHouse});
  }

  render() {
    return(
      <div>
        <h2>Muggles & Magic Folks (M&Ms)</h2>
        <CharacterSelector
          characters = {this.state.characters}
          handleCharacterSelected = {this.handleCharacterSelected}
        />
        <HouseSelector
          houses = {this.state.houses}
          handleHouseSelected = {this.handleHouseSelected}
        />
        <CharacterDetail character = {this.state.currentCharacter}/>
        <HouseDetail
          house = {this.state.currentHouse}
          characters = {this.state.characters}
        />
      </div>
    )
  }




}

export default Characters;
