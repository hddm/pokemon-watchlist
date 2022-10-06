import Layout from '@/components/Layout'
import Link from 'next/link'
import Pagination from '@/components/Pagination'
import { paginate } from '@/utils/paginate'
import { ReactElement, useState } from 'react'
import { useGetAllPokemonSpeciesQuery } from '@/graphql/generated'

export default function HomePage(): ReactElement {
  const { data, loading } = useGetAllPokemonSpeciesQuery({
    variables: { offset: 0, take: 102 },
  })

  const [currentPage, setCurrentPage] = useState(1)

  let paginatedItems = null
  if (!loading) {
    paginatedItems = paginate({
      items: data.getAllPokemonSpecies,
      page: currentPage,
    })
  }

  const onPrevClick = () => {
    setCurrentPage((prev) => prev - 1)
  }

  const onNextClick = () => {
    setCurrentPage((prev) => prev + 1)
  }

  return (
    <Layout title="Home">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="sm:tw-grid-cols-2 tw-grid tw-grid-cols-1 tw-gap-4">
            {paginatedItems.items.map((species) => (
              <Link href={`/pokemons/${species}`}>
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
              start={paginatedItems.start}
              end={paginatedItems.end}
              total={paginatedItems.total}
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
