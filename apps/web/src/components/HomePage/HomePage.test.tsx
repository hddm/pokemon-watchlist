import HomePage from '@/pages'
import { PAGE_KEY } from '@/constants'
import { render, screen, userEvent, waitFor } from '@/test/utils'

function setup() {
  const utils = render(<HomePage />)
  return { ...utils }
}
describe('<HomePage>', () => {
  it('renders the page successfull after multiple next clicks', async () => {
    const { getByText, getByTestId } = setup()
    expect(getByText('Loading...'))
    expect(await screen.findByText('Argalis'))
    expect(getByText('Brattler'))
    expect(() => getByText('Breezi')).toThrow()
    expect(JSON.parse(localStorage.getItem(PAGE_KEY))).toEqual(1)

    const nextButton = getByTestId('pagination-next-btn')
    await waitFor(() => userEvent.click(nextButton))
    expect(JSON.parse(localStorage.getItem(PAGE_KEY))).toEqual(2)
    expect(() => getByText('Brattler')).toThrow()
    expect(getByText('Breezi'))
    expect(getByText('Charizard'))
  })

  it('filters', async () => {
    const { getByTestId, getByText } = setup()
    const input = screen.getByLabelText('Search species')

    expect(await screen.findByText('Argalis'))
    await waitFor(() => userEvent.tab())
    await waitFor(() => userEvent.type(input, 'a'))
    expect(getByText('Bulbasaur'))
    const paginationTotal = getByTestId('pagination-total')
    expect(paginationTotal).toHaveTextContent('67')
  })
})
