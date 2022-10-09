import { PokemonEnum } from '../graphql/generated';

export type WatchListAction = {
  type: 'ADD_TO_WATCH_LIST' | 'REMOVE_FROM_WATCH_LIST',
  pokemon: PokemonEnum
}