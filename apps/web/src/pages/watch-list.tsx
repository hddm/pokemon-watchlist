import Layout from '@/components/Layout'
import Link from 'next/link'
import { AppContext } from '@/context/globalState'
import { PokemonEnum } from '@/graphql/generated'
import { useContext } from 'react'

export default function WatchList() {
  const { state } = useContext(AppContext)
  return (
    <Layout>
      <div className="sm:tw-grid-cols-2 tw-grid tw-grid-cols-1 tw-gap-4">
        {state.watchList.map((pokemon) => (
          <Link key={pokemon} href={`/pokemons/${pokemon}`.toLowerCase()}>
            <a
              key={pokemon}
              className="focus-within:tw-ring-2 focus-within:tw-ring-indigo-500 focus-within:tw-ring-offset-2
            hover:tw-border-gray-400 tw-relative tw-flex tw-items-center tw-space-x-3 tw-rounded-lg tw-border
            tw-border-gray-300 tw-bg-white tw-px-6 tw-py-5 tw-shadow-sm"
            >
              <p className="tw-text-sm tw-font-medium tw-text-gray-900">
                {pokemon}
              </p>
            </a>
          </Link>
        ))}
        {state.watchList.length == 0 && <p>Your watch list is empty.</p>}
      </div>
    </Layout>
  )
}
