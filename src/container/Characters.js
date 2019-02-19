import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

   componentDidMount () {
    const url = 'http://hp-api.herokuapp.com/api/characters';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({characters: data})
    });

    request.send();
  };

  handleCharacterSelected(index){
    const selectedCharacter = this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter});
  }

  render() {
    return(
      <div>
        <h2>Muggles & Magic Folks (M&Ms)</h2>
        <CharacterSelector
          characters = {this.state.characters}
          handleCharacterSelected = {this.handleCharacterSelected}/>
          <CharacterDetail character = {this.state.currentCharacter}/>
      </div>
    )
  }




}

export default Characters;
