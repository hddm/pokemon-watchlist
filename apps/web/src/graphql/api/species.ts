import { gql } from '@apollo/client';

export const GET_DRAGONS = gql`
query GetAllPokemonSpecies($offset: Int, $take: Int) {
   getAllPokemonSpecies(offset: $offset, take: $take)
}
`
