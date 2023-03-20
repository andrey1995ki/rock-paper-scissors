import {RootState} from "../store";

export const GameSelector = (store: RootState) => {
    return store.game
}
