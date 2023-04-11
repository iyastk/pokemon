import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { PokemonQuery } from "./utils/fonts/queries/queries";

// query
const url = "https://graphql-pokemon2.vercel.app";
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

export async function generateStaticParams() {
  const query = gql`
    query pokemons($first: Int!) {
      pokemons(first: $first) {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
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
  const variables = { first: 5 };

  let data;
  try {
    data = await client.query({ query, variables });
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
  }

  console.log("data");
  console.log(JSON.stringify(data, null, 3));
  const pokemons = data?.data.pokemons;

  return pokemons.map((e: { name: any }) => ({
    slug: e.name,
  }));
}

export default function Home({params} ) {
  console.log(params);
  return <main className="bg-blue-200">{params}</main>;
}
