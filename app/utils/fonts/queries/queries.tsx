export const PokemonQuery = (count: number) => {
  return ` query pokemons($first: Int!){
        pokemons(first: ${count}){
          id
          number
          name
          weight{
            minimum
            maximum
          }
          height{
            minimum
            maximum
          }
          classification
          types
          resistant
          weaknesses
          fleeRate
          maxCP
          maxHP
          image
        }
      }
      `;
};
