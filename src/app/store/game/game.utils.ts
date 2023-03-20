import {Item} from "./game.model";
import {ItemsComponents} from "../../components/GameComponent/components/ItemComponent/ItemComponent.utils";

export const getHouseItem = (currentMode: 'default' | 'bonus', selectedItem: undefined | Item) => {
    let filteredItem = ItemsComponents
        .filter(item => item.component !== selectedItem)
    let randomAmount = currentMode === 'default' ? 2 : 4
    let randomItemIndex = Math.floor(Math.random() * randomAmount)
    let randomItem = filteredItem[randomItemIndex]
    return randomItem.component
}

export const getResult = (selectedItem: undefined | Item, selectedHouseItem: undefined | Item): 'win' | 'lose' => {
    let selectedHouseBeat = ItemsComponents
        .filter(item => item.component === selectedHouseItem)[0]?.beats
    if (selectedHouseBeat?.findIndex(beat => beat === selectedItem) === -1) return 'win'
    return 'lose'
}
