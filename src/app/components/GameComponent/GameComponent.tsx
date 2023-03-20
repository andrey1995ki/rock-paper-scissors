import React from 'react';
import {PentagonSVG, TriangleSVG} from "../SVG/GameFieldSVG/GameFieldSVG";
import {useSelector} from "react-redux";
import {GameSelector} from "../../store/game/game.selector";
import {ItemComponent} from "./components/ItemComponent/ItemComponent";
import {ItemsComponents} from "./components/ItemComponent/ItemComponent.utils";
import {ResultComponent} from "./components/ResultComponent/ResultComponent";
import {Game, GameField} from "./GameComponent.styled";


export const GameComponent = () => {
    const {currentMode, selectedItem} = useSelector(GameSelector)
    return (
        <GameField>
            <Game selectedItem={!!selectedItem}>
                {
                    !selectedItem &&
                    (currentMode === 'default' ? <TriangleSVG/> : <PentagonSVG/>)
                }
                {
                    ItemsComponents.map(({component, svg, available}) => {
                        if (currentMode === 'default' && available === 'all') {
                            return (
                                <ItemComponent key={component} item={component}>{svg}</ItemComponent>)
                        }
                        if (currentMode === 'bonus') {
                            return (
                                <ItemComponent key={component} item={component}>{svg}</ItemComponent>)
                        }
                        return false
                    })
                }
                <ResultComponent/>
            </Game>
        </GameField>
    );
};
