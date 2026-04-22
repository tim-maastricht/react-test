import React from "react";

export default class PokemonNameCard extends React.Component {
  render() {
    console.log("Class component rendered!");
    return(
      <h2>
        {this.props.pokemonName}
      </h2>
    )
  }
}
