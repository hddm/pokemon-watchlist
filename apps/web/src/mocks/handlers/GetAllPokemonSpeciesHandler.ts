import species from '@/mocks/fixtures/species.json'
import { graphql } from 'msw'

const graphqlpokemon = graphql.link('https://graphqlpokemon.favware.tech')

const handlers = [
  graphqlpokemon.query('GetAllPokemonSpecies', (req, res, ctx) => {
    return res(ctx.data(species))
  }),
]

export default handlers
