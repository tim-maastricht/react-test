export default function PokemonNameCard({ pokemonName }) {
  if (pokemonName.toString().toLocaleLowerCase() == "mewtwo") {
    return null;
  } else {
    return <h2>{pokemonName}</h2>;
  }
}
