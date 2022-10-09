import species from '@/mocks/fixtures/argalis.json'
import { graphql } from 'msw'

const graphqlpokemon = graphql.link('https://graphqlpokemon.favware.tech')

const handlers = [
  graphqlpokemon.query('GetPokemon', (req, res, ctx) => {
    return res(ctx.data(species))
  }),
]

export default handlers
