import { gql } from '@apollo/client';

export const GET_DRAGONS = gql`
  query GetPokemonSpecies {
    getAllPokemonSpecies(offset: 0, take: 100)
  }
`
