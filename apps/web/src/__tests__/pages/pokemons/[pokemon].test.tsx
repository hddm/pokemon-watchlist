import { Mock, vi } from 'vitest'
import { render, screen, userEvent, waitFor } from '@/test/utils'
import PokemonPage from '@/pages/pokemons/[pokemon]'

function setup() {
  const utils = render(<PokemonPage />)
  return { ...utils }
}

describe('<PokemonPage>', () => {
  it('shows Argalis page successfuly', async () => {
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
