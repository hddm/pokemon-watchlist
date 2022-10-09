import ArrowTopRightOnSquareIcon from '@heroicons/react/24/outline/ArrowTopRightOnSquareIcon'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { PokemonEnum, useGetPokemonQuery } from '@/graphql/generated'
import { useRouter } from 'next/router'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function PokemonAttribute(props) {
  return (
    <div className="tw-py-4 sm:tw-grid sm:tw-grid-cols-2 sm:tw-gap-4 sm:tw-py-5 sm:tw-px-6">
      {props.children}
    </div>
  )
}

function DescriptionTerm(props) {
  return (
    <dt className="tw-text-sm tw-font-medium tw-text-gray-500">
      {props.children}
    </dt>
  )
}

function DescriptionDetails(props) {
  return (
    <dd className="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-mt-0">
      {props.children}
    </dd>
  )
}

export default function Pokemon() {
  const router = useRouter()
  const { pokemon } = router.query

  let pokemonKey = null
  if (pokemon) {
    pokemonKey = capitalizeFirstLetter(
      pokemon.toString().toLowerCase().replace(/-/g, ''),
    )
  }

  const { data, loading } = useGetPokemonQuery({
    variables: { pokemon: PokemonEnum[pokemonKey as keyof typeof PokemonEnum] },
  })

  return (
    <Layout>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="tw-overflow-hidden tw-bg-white tw-shadow sm:tw-rounded-lg">
          <div className="tw-px-4 tw-py-5 sm:tw-px-6 tw-mx-auto">
            <h1 className="tw-text-center">
              {capitalizeFirstLetter(data.getPokemon.species)}
            </h1>
          </div>
          <div className="tw-px-4 tw-py-5 sm:tw-px-6">
            <div className="tw-mt-1 tw-max-w-2xl tw-mx-auto">
              <div className="tw-text-center">
                <Image
                  src={data.getPokemon.sprite}
                  width="100"
                  height="100"
                  alt=""
                ></Image>
              </div>
            </div>
          </div>
          <div className="tw-border-t tw-border-gray-200 tw-px-4 tw-py-5 sm:tw-p-0">
            <dl className="sm:tw-divide-y sm:tw-divide-gray-200">
              <PokemonAttribute>
                <DescriptionTerm>Species</DescriptionTerm>
                <DescriptionDetails>
                  {data.getPokemon.baseSpecies
                    ? data.getPokemon.baseSpecies
                    : capitalizeFirstLetter(data.getPokemon.species)}
                </DescriptionDetails>
              </PokemonAttribute>
              <PokemonAttribute>
                <DescriptionTerm>Levelling Rate</DescriptionTerm>
                <DescriptionDetails>
                  {data.getPokemon.levellingRate}
                </DescriptionDetails>
              </PokemonAttribute>
              <PokemonAttribute>
                <DescriptionTerm>Flavor Texts</DescriptionTerm>
                <DescriptionDetails>
                  <ul className="tw-list-disc">
                    {data.getPokemon.flavorTexts.map((flavorText) => (
                      <li key={flavorText.game}>
                        <span className="tw-font-bold tw-text-gray-900">
                          {flavorText.game}
                        </span>
                        : {flavorText.flavor}
                      </li>
                    ))}
                  </ul>
                </DescriptionDetails>
              </PokemonAttribute>
              <PokemonAttribute>
                <DescriptionTerm>Gender</DescriptionTerm>
                <DescriptionDetails>
                  <ul>
                    <li>Male: {data.getPokemon.gender.male}</li>
                    <li>Female: {data.getPokemon.gender.male}</li>
                  </ul>
                </DescriptionDetails>
              </PokemonAttribute>
              <PokemonAttribute>
                <DescriptionTerm>Bulbapedia Page</DescriptionTerm>
                <DescriptionDetails>
                  <a href={data.getPokemon.bulbapediaPage}>
                    <ArrowTopRightOnSquareIcon className="tw-h-6 tw-w-6 tw-text-blue-500" />
                  </a>
                </DescriptionDetails>
              </PokemonAttribute>
            </dl>
          </div>
        </div>
      )}
    </Layout>
  )
}
