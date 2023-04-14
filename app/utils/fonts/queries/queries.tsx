export const PokemonQuery = () => {
  return `
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      classification
      types
      image
    }
  }
`;
};
