import PokemonNameCard from "./PokemonNameCard-Class";

let pokemonNames = ["Pikachu", "Mewtwo", "Charizard", "Pinsir"];

export default function FavouritePokemonList() {
  return (
    <div>
      <h1>Favourite Pokemon List</h1>
      {pokemonNames.map((name, index) => {
        return <PokemonNameCard pokemonName={name} key={`${name}-${index}`} />;
      })}
    </div>
  );
}
