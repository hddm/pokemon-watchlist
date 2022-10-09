import { AppState } from '@/context/globalState';
import { PokemonEnum } from '../graphql/generated';
import { WatchListAction } from '@/context/actions';


export function watchListReducer(state: PokemonEnum[], action: WatchListAction) {
  switch (action.type) {
    case 'ADD_TO_WATCH_LIST':
      return [
        ...state,
        action.pokemon
      ];
    case 'REMOVE_FROM_WATCH_LIST':
      return [
        ...state.filter(
          (pokemon) => pokemon !== action.pokemon
        ),
      ];
    default:
      return state;
  }
}

