import { gql } from '@apollo/client';

export const GET_POKEMON = gql`
query GetPokemon($pokemon: PokemonEnum!) {
  getPokemon(pokemon: $pokemon reverseFlavorTexts: true takeFlavorTexts: 1) {
    num
    species
    types
		abilities { first second hidden }
		baseStats { hp attack defense specialattack specialdefense speed }
		gender { male female }
    height
    weight
		flavorTexts { game flavor }
		evYields { hp attack defense specialattack specialdefense speed }
    isEggObtainable
    minimumHatchTime
    maximumHatchTime
    levellingRate
    sprite
    shinySprite
    backSprite
    shinyBackSprite
    smogonTier
    smogonPage
    serebiiPage
    bulbapediaPage
  }
}
`