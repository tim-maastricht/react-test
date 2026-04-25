import React from "react";

export default class RandomPokemonCard extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonName: "",
      pokemonSprite: "",
    };
  }

  async componentDidMount(){
    // generate a random pokemon
    let randomPokemonNumber = Math.floor(Math.random() * 1025) + 1;

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemonNumber);
    let jsonData = await response.json();

    this.setState({
      pokemonName: jsonData.name,
      pokemonSprite: jsonData.sprites.front_default
    })
  }// comment

  render() {
    return (
      <div className="randomPokemonCard">
        <h1>{this.state.pokemonName}</h1>
        <img
          src={this.state.pokemonSprite}
          alt={"sprite for pokemon named " + this.state.pokemonName}
        />
      </div>
    );
  }
}
