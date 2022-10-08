import species from '@/mocks/fixtures/species.json'
import { paginate } from './paginate'

describe('paginate', () => {
  it('paginate 1st page successfully', async () => {
    const pageData = paginate(species.getAllPokemonSpecies)
    expect(pageData.start).toBe(1)
    expect(pageData.end).toBe(10)
    expect(pageData.previousPage).toBeNull()
    expect(pageData.nextPage).toBe(2)
  })
  it('paginate 2nd page successfully', async () => {
    const pageData = paginate(species.getAllPokemonSpecies, 2)
    expect(pageData.start).toBe(11)
    expect(pageData.end).toBe(20)
    expect(pageData.previousPage).toBe(1)
    expect(pageData.nextPage).toBe(3)
  })
  it('paginate last page successfully', async () => {
    const pageData = paginate(species.getAllPokemonSpecies, 11)
    expect(pageData.start).toBe(101)
    expect(pageData.end).toBe(102)
    expect(pageData.previousPage).toBe(10)
    expect(pageData.nextPage).toBeNull()
  })
})
