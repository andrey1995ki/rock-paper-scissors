import React, {FC} from 'react';
import {ItemProps} from "./ItemComponent.model";
import {getStyle} from "./ItemComponent.utils";
import {useSelector} from "react-redux";
import {GameSelector} from "../../../../store/game/game.selector";
import {useAppDispatch} from "../../../../store/hooks";
import {chooseItem} from "../../../../store/game/game.slice";
import {Item, ItemColor, ItemSVG, WinAnimationComponent} from "./ItemComponent.styled";

export const ItemComponent: FC<ItemProps> = ({item, selectedHome, children}) => {
    const {currentMode, selectedItem, gameResult} = useSelector(GameSelector)
    const dispatch = useAppDispatch()
    const selectItem = () => {
        if (!selectedItem) {
            dispatch(chooseItem(item))
        }
    }
    if (!!selectedItem && item !== selectedItem && !selectedHome) {
        return <></>
    }
    let showWinAnimation = (gameResult === 'win' && item === selectedItem) || (gameResult === 'lose' && !!selectedHome)
    const {background, boxShadow, top, left} = getStyle(item, currentMode)
    return (
        <>
            <Item onClick={selectItem} background={background} boxShadow={boxShadow} top={!!selectedItem ? '0px' : top}
                  left={!!selectedItem ? '-15px' : left}
                  selectedItem={!!selectedItem} selectedHome={!!selectedHome} endGame={!!gameResult}>
                {
                    showWinAnimation &&
                    <WinAnimationComponent/>
                }
                <ItemColor background={background} boxShadow={boxShadow}>
                    <ItemSVG selectedItem={!!selectedItem}>
                        {children}
                    </ItemSVG>
                </ItemColor>
            </Item>
        </>

    );
};
