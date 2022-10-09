import { PokemonEnum } from '@/graphql/generated'
import { WATCH_LIST_KEY } from '@/constants'
import { WatchListAction } from '/actions'
import { watchListReducer } from './reducers'
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useReducer,
} from 'react'

export interface AppState {
  watchList: PokemonEnum[]
}

// initial state
let initialState
if (typeof window !== 'undefined') {
  let watchList: PokemonEnum[] = []
  if (localStorage.getItem(WATCH_LIST_KEY)) {
    watchList = JSON.parse(localStorage.getItem(WATCH_LIST_KEY))
  }
  initialState = {
    watchList,
  }
} else {
  initialState = { watchList: [] }
}

// create context
export interface IAppContext {
  state: AppState
  dispatch: React.Dispatch<WatchListAction>
}

export const AppContext = createContext<IAppContext>(initialState)

const mainReducer = ({ watchList }: AppState, action) => ({
  watchList: watchListReducer(watchList, action),
})

// provider components
export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  useEffect(() => {
    localStorage.setItem(WATCH_LIST_KEY, JSON.stringify(state.watchList))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
