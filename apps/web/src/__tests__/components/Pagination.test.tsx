import { Pagination } from '../../components/Pagination'
import { render } from '@/test/utils'

describe('<Pagination}>', () => {
  it('renders successfully', () => {
    const { getByTestId } = render(
      <Pagination
        start={1}
        end={10}
        total={102}
        onPrevClick={() => undefined}
        onNextClick={() => undefined}
        itemName="Pokemon species"
      ></Pagination>,
    )
    expect(getByTestId('pagination-start')).toHaveTextContent('1')
    expect(getByTestId('pagination-end')).toHaveTextContent('10')
  })
})
