import GetAllPokemonSpeciesHandler from '@/mocks/handlers/GetAllPokemonSpeciesHandler'
import { setupServer } from 'msw/node'

export const server = setupServer(...GetAllPokemonSpeciesHandler)
