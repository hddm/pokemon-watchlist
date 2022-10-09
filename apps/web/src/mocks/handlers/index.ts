import GetAllPokemonSpeciesHandler from '@/mocks/handlers/GetAllPokemonSpeciesHandler'
import GetPokemonHandler from '@/mocks/handlers/GetPokemonHandler'
const handlers = [...GetAllPokemonSpeciesHandler, ...GetPokemonHandler]
export default handlers
