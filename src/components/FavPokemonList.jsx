import PokemonNameCard from "./PokemonNameCard";

let pokemonNames = ["Pikachu", "Gyarados", "Charizard", "Mewtwo"];

export default function FavPokemonList() {
  return (
    <div className="container">
      <h1>Favourite Pokemon List</h1>
      {pokemonNames.map((name, index) => {
        // return <h2 key={index}>{name}</h2>;
        return <PokemonNameCard key={index} pokemonName={name} />
      })}
    </div>
  );
}
