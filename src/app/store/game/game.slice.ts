import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GameState, Item} from "./game.model";
import {getHouseItem, getResult} from "./game.utils";

const initialState: GameState = {
    currentMode: 'default',
    selectedItem: undefined,
    selectedHouseItem: undefined,
    gameResult: undefined,
    score: 0,
}

const GameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        changeMode: (state) => {
            state.currentMode = state.currentMode === 'default' ? 'bonus' : 'default'
            state.selectedItem = undefined
            state.selectedHouseItem = undefined
            state.gameResult = undefined
        },
        chooseItem: (state, actions: PayloadAction<Item>) => {
            state.selectedItem = actions.payload
        },
        chooseHouseItem: (state) => {
            state.selectedHouseItem = getHouseItem(state.currentMode, state.selectedItem)
        },
        setResult: (state) => {
            let result = getResult(state.selectedItem, state.selectedHouseItem)
            state.gameResult = result
            state.score = result === 'win' ? state.score + 1 : state.score
        },
        resetGame: (state) => {
            state.selectedItem = undefined
            state.selectedHouseItem = undefined
            state.gameResult = undefined
        }
    }
})
export const {
    changeMode,
    chooseItem,
    chooseHouseItem,
    setResult,
    resetGame,
} = GameSlice.actions
export default GameSlice.reducer
