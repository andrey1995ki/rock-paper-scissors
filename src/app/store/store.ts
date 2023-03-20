import {combineReducers, configureStore} from "@reduxjs/toolkit";
import GameSlice from './game/game.slice'

const reducer = combineReducers({
    game: GameSlice
})
export const store = configureStore({
    reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
