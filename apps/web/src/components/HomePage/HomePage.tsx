import Image from 'next/image'
import { Page } from '@/components/Page'
import { ReactElement, Suspense } from 'react'
import { useGetPokemonSpeciesQuery } from '@/graphql/generated'

export function HomePage(): ReactElement {
  const { data, loading } = useGetPokemonSpeciesQuery()

  if (loading) return <div>Loading...</div>

  return (
    <Page title="Home">
      {data.getAllPokemonSpecies.map((species) => (
        <div
          key={species}
          className="tw-mb-12 tw-flex tw-items-center tw-gap-4"
        >
          {species}
        </div>
      ))}
    </Page>
  )
}
