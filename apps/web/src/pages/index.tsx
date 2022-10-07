import Layout from '@/components/Layout'
import Link from 'next/link'
import Pagination from '@/components/Pagination'
import Search from '@/components/Search'
import { PageData, paginate } from '@/utils/paginate'
import { ReactElement, useEffect, useState } from 'react'
import { useGetAllPokemonSpeciesQuery } from '@/graphql/generated'

const PAGE_KEY = 'pk_current_page'

const getPageNumberFromLocalStorage = () => {
  if (
    window.localStorage &&
    parseInt(window.localStorage.getItem(PAGE_KEY)) > 0
  ) {
    return parseInt(localStorage.getItem(PAGE_KEY))
  }
  return 1
}

export default function HomePage(): ReactElement {
  const { data, loading } = useGetAllPokemonSpeciesQuery({
    variables: { offset: 0, take: 102 },
  })

  const [currentPage, setCurrentPage] = useState(1)
  const [searchField, setSearchField] = useState('')
  const [paginatedItems, setPaginatedItems] = useState<PageData<string>>({
    previousPage: 1,
    nextPage: 1,
    start: 1,
    total: 1,
    end: 1,
    totalPages: 1,
    items: [],
  })
  const [filteredPaginatedItems, setFilteredPaginatedItems] =
    useState<PageData<string>>(paginatedItems)
  const [filteredItems, setFilteredItems] = useState(null)

  useEffect(() => {
    setCurrentPage(getPageNumberFromLocalStorage())
  }, [])

  useEffect(() => {
    window.localStorage.setItem(PAGE_KEY, JSON.stringify(currentPage))
  }, [currentPage])

  useEffect(() => {
    if (data) {
      const sortedData = [...data.getAllPokemonSpecies].sort()
      setPaginatedItems(paginate(sortedData, currentPage))
    }
  }, [data, currentPage])

  const onPrevClick = () => {
    setCurrentPage((page) => page - 1)
  }

  const onNextClick = () => {
    setCurrentPage((page) => page + 1)
  }

  useEffect(() => {
    if (data) {
      const sortedData = [...data.getAllPokemonSpecies].sort()
      const newFilteredItems = sortedData.filter((item) => {
        return item.toLocaleLowerCase().includes(searchField)
      })
      setFilteredItems(newFilteredItems)
    }
  }, [data, searchField])

  useEffect(() => {
    if (filteredItems) {
      setFilteredPaginatedItems(paginate(filteredItems, currentPage))
    }
  }, [filteredItems, currentPage])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <Layout title="Home">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="tw-py-8">
            <Search onChangeHandler={onSearchChange} />
          </div>
          <div className="sm:tw-grid-cols-2 tw-grid tw-grid-cols-1 tw-gap-4">
            {filteredPaginatedItems.items.map((species) => (
              <Link key={species} href={`/pokemons/${species}`.toLowerCase()}>
                <a
                  key={species}
                  className="focus-within:tw-ring-2 focus-within:tw-ring-indigo-500 focus-within:tw-ring-offset-2
            hover:tw-border-gray-400 tw-relative tw-flex tw-items-center tw-space-x-3 tw-rounded-lg tw-border
            tw-border-gray-300 tw-bg-white tw-px-6 tw-py-5 tw-shadow-sm"
                >
                  <p className="tw-text-sm tw-font-medium tw-text-gray-900">
                    {species}
                  </p>
                </a>
              </Link>
            ))}
          </div>
          <div className="tw-py-8">
            <Pagination
              start={filteredPaginatedItems.start}
              end={filteredPaginatedItems.end}
              total={filteredPaginatedItems.total}
              onPrevClick={onPrevClick}
              onNextClick={onNextClick}
              itemName="Pokemon species"
            ></Pagination>
          </div>
        </>
      )}
    </Layout>
  )
}
