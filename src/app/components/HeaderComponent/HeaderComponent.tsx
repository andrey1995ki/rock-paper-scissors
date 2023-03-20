import React from 'react';
import {LogoBonusSvg, LogoSvg} from "../SVG/LogoSVG/LogoSVG";
import {useSelector} from "react-redux";
import {GameSelector} from "../../store/game/game.selector";
import {Header, Score, ScoreResult, ScoreTitle, SVG} from "./HeaderComponent.styled";


export const HeaderComponent = () => {
    const {currentMode, score} = useSelector(GameSelector)
    return (
        <Header>
            <SVG>
                {
                    currentMode === 'default' ? <LogoSvg/> : <LogoBonusSvg/>
                }
            </SVG>
            <Score>
                <ScoreTitle>SCORE</ScoreTitle>
                <ScoreResult>{score}</ScoreResult>
            </Score>
        </Header>
    );
};
