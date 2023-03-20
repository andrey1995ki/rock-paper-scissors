import {PropsWithChildren} from "react";
import {Item} from "../../../../store/game/game.model";

export interface ItemProps extends PropsWithChildren {
    item: Item,
    selectedHome?: boolean
}

export interface ItemsData {
    component: Item
    available: 'all' | 'bonus'
    svg: JSX.Element
    beats: Array<Item>
}

export interface ItemDivProps {
    top: string
    left: string
    background: string
    boxShadow: string
}

