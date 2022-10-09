import { AppContext } from '../../../context/globalState'
import { Mock, vi } from 'vitest'
import { render, screen, userEvent, waitFor } from '@/test/utils'
import PokemonPage from '@/pages/pokemons/[pokemon]'

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
    vi.mock('next/router', () => ({
      useRouter() {
        return {
          query: 'argalis',
        }
      },
    }))

    const { getByText, getByRole } = setup()
    expect(getByText('Loading...'))
    await waitFor(() => {
      expect(getByRole('heading')).toHaveTextContent('Argalis')
    })
  })
})
