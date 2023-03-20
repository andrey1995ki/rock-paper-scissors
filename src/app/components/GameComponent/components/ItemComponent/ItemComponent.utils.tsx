import {LizardSVG, PaperSVG, RockSVG, ScissorsSVG, SpockSVG} from "../../../SVG/ItemSVG/ItemSVG";
import React from "react";
import {ItemDivProps, ItemsData} from "./ItemComponent.model";
import {Item} from "../../../../store/game/game.model";

export const ItemsComponents: Array<ItemsData> = [
    {
        component: 'rock',
        available: 'all',
        svg: <RockSVG/>,
        beats:['lizard','scissors'],
    },
    {
        component: 'scissors',
        available: 'all',
        svg: <ScissorsSVG/>,
        beats:['paper','lizard'],
    },
    {
        component: 'paper',
        available: 'all',
        svg: <PaperSVG/>,
        beats:['rock', 'spock'],
    },
    {
        component: 'lizard',
        available: 'bonus',
        svg: <LizardSVG/>,
        beats:['paper','spock'],
    },
    {
        component: 'spock',
        available: 'bonus',
        svg: <SpockSVG/>,
        beats:['scissors','rock'],
    },
]


export const getStyle = (item: Item, mode: 'default' | 'bonus'): ItemDivProps => {
    let background = ''
    let boxShadow = ''
    switch (item) {
        case "scissors":
            background = 'linear-gradient(hsl(39, 89%, 49%),hsl(40, 84%, 53%))'
            boxShadow = '0px 3px 0px hsl(39, 89%, 30%)'
            if (mode === 'default') {
                return {
                    top: '-25px',
                    left: '225px',
                    background,
                    boxShadow
                }
            }
            return {
                top: '-35px',
                left: '100px',
                background,
                boxShadow
            }
        case 'paper':
            background = 'linear-gradient(hsl(230, 89%, 62%),hsl(230, 89%, 65%))'
            boxShadow = '0px 3px 0px hsl(230, 89%, 30%)'
            if (mode === 'default') {
                return {
                    top: '-25px',
                    left: '-15px',
                    background,
                    boxShadow
                }
            }
            return {
                top: '70px',
                left: '230px',
                background,
                boxShadow
            }
        case "rock":
            background = 'linear-gradient(hsl(349, 71%, 52%),hsl(349, 70%, 56%))'
            boxShadow = '0px 3px 0px hsl(349, 71%, 30%)'
            if (mode === 'default') {
                return {
                    top: '225px',
                    left: '100px',
                    background,
                    boxShadow
                }
            }
            return {
                top: '225px',
                left: '200px',
                background,
                boxShadow
            }
        case "lizard":
            background = 'linear-gradient(hsl(261, 73%, 60%),hsl(261, 72%, 63%))'
            boxShadow = '0px 3px 0px hsl(261, 73%, 30%)'
            return {
                top: '225px',
                left: '10px',
                background,
                boxShadow
            }
        case "spock":
            background = 'linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))'
            boxShadow = '0px 3px 0px hsl(189, 59%, 30%)'
            return {
                top: '70px',
                left: '-20px',
                background,
                boxShadow
            }
        default:
            return {
                top: '0',
                left: '0',
                background,
                boxShadow
            }
    }
}
