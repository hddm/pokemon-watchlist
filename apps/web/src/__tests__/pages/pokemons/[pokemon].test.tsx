import { AppContext } from '@/context/globalState'
import { render, screen, userEvent, waitFor } from '@/test/utils'
import { vi } from 'vitest'
import PokemonPage from '@/pages/pokemons/[pokemon]'

vi.mock('next/router', () => ({
  useRouter() {
    return {
      query: {
        pokemon: 'argalis',
      },
    }
  },
}))

function setup() {
  const [state, dispatch] = [{ watchList: [] }, null]
  const utils = render(
    <AppContext.Provider value={{ state, dispatch }}>
      <PokemonPage />
    </AppContext.Provider>,
  )
  return { ...utils }
}

describe('<PokemonPage>', () => {
  it('shows Argalis page successfully', async () => {
    const { getByText, getByRole } = setup()
    expect(getByText('Loading...'))
    await waitFor(() => {
      expect(getByRole('heading')).toHaveTextContent('Argalis')
    })
  })
})
