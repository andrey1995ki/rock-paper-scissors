import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {GameSelector} from "../../../../store/game/game.selector";
import {ItemsComponents} from "../ItemComponent/ItemComponent.utils";
import {useAppDispatch} from "../../../../store/hooks";
import {resetGame} from "../../../../store/game/game.slice";
import {ItemComponent} from "../ItemComponent/ItemComponent";
import {Button, Result, SkeletonItem, Text} from "./ResultComponent.styled";
import {useGetResult} from "../../../../hook/useGetResult";

export const ResultComponent = () => {
    const {selectedItem, selectedHouseItem, gameResult} = useSelector(GameSelector)
    const dispatch = useAppDispatch()
    const {getResult, showResult} = useGetResult()
    const item = ItemsComponents.filter(item => item.component === selectedHouseItem)[0]
    useEffect(() => {
        if (!!selectedItem) getResult(true)
        else getResult(false)
    }, [getResult, selectedItem])
    const reset = () => {
        dispatch(resetGame())
    }
    return (
        <div>
            {
                showResult &&
                <div>
                    <Text position={'left'} endGame={!!gameResult}>YOU PICKED</Text>
                    <Text position={'right'} endGame={!!gameResult}>THE HOUSE PICKED</Text>
                    {
                        !!selectedHouseItem
                            ? <ItemComponent item={item.component} selectedHome={true}>{item.svg}</ItemComponent>
                            : <SkeletonItem/>
                    }
                    {
                        gameResult &&
                        <Result>
                            <h1>{gameResult === 'win' ? 'YOU WIN' : 'YOU LOSE'}</h1>
                            <Button onClick={reset} win={gameResult === 'win'}>
                                PLAY AGAIN
                            </Button>
                        </Result>
                    }
                </div>
            }
        </div>
    );
};
