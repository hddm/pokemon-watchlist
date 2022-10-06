import Image from 'next/image'
import Layout from '@/components/Layout'
import { PokemonEnum, useGetPokemonQuery } from '@/graphql/generated'
import { useRouter } from 'next/router'
export default function Pokemon() {
  const router = useRouter()
  const { pokemon } = router.query

  const { data, loading } = useGetPokemonQuery({
    variables: { pokemon: PokemonEnum[pokemon as keyof typeof PokemonEnum] },
  })

  const attributes = [
    'bulbapediaPage',
    'levellingRate',
    'flavorTexts',
    'gender',
    'baseStats',
    'types',
  ]

  return (
    <Layout>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="tw-overflow-hidden tw-bg-white tw-shadow sm:tw-rounded-lg">
          <div className="tw-px-4 tw-py-5 sm:tw-px-6">
            <h3 className="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"></h3>
            <p className="tw-mt-1 tw-max-w-2xl tw-text-sm tw-text-gray-500">
              <Image
                src={data.getPokemon.sprite}
                width="100"
                height="100"
                alt=""
              ></Image>
            </p>
          </div>
          <div className="tw-border-t tw-border-gray-200 tw-px-4 tw-py-5 sm:tw-p-0">
            <dl className="sm:tw-divide-y sm:tw-divide-gray-200">
              <div className="tw-py-4 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-py-5 sm:tw-px-6">
                <dt className="tw-text-sm tw-font-medium tw-text-gray-500">
                  species
                </dt>
                <dd className="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                  {data.getPokemon.species}
                </dd>
                <dt className="tw-text-sm tw-font-medium tw-text-gray-500">
                  bulbapediaPage
                </dt>
                <dd className="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                  {data.getPokemon.bulbapediaPage}
                </dd>
                <dt className="tw-text-sm tw-font-medium tw-text-gray-500">
                  levellingRate
                </dt>
                <dd className="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                  {data.getPokemon.levellingRate}
                </dd>
                <dt className="tw-text-sm tw-font-medium tw-text-gray-500">
                  flavorTexts
                </dt>
                <dd className="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                  <ul>
                    {data.getPokemon.flavorTexts.map((flavorText) => (
                      <li>{flavorText}</li>
                    ))}
                  </ul>
                </dd>
                <dt className="tw-text-sm tw-font-medium tw-text-gray-500">
                  Gender
                </dt>
                <dd className="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                  <dd className="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                    <ul>
                      <li>Male: {data.getPokemon.gender.male}</li>
                      <li>Female: {data.getPokemon.gender.male}</li>
                    </ul>
                  </dd>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </Layout>
  )
}
