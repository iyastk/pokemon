import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { PokemonQuery } from "./utils/fonts/queries/queries";
import Card from "./components/Card";

// query
const url = "https://graphql-pokemon2.vercel.app";
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

interface pokemon {
  id: string;
  number: string;
  name: string;
  image: string;
  type: string[];
}

export default async function Home() {
  const queryString = PokemonQuery();
  const query = gql(queryString);
  const variables = { first: 60 };
  let data;
  try {
    data = await client.query({ query, variables });
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
  }

  const pokemons = data?.data.pokemons;
  return (
    <main className="grid grid-cols-4 grid-rows- auto-cols-max		 bg-blue-200 px-5">
      {pokemons.map((el: pokemon) => {
        return <Card key={el.id} {...el}></Card>;
      })}
    </main>
  );
}
