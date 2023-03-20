import React, {FC} from 'react';
import {useAppDispatch} from "../../store/hooks";
import {changeMode} from "../../store/game/game.slice";
import {Button, Footer, FooterGroup} from "./FooterComponent.styled";
import {FooterComponentProps} from "./FooterComponent.model";


export const FooterComponent: FC<FooterComponentProps> = ({setShowModal}) => {
    const dispatch = useAppDispatch()
    return (
        <Footer>
            <FooterGroup>
                <Button onClick={() => dispatch(changeMode())}>CHANGE MODE</Button>
                <Button onClick={() => setShowModal(true)}>RULES</Button>
            </FooterGroup>
        </Footer>
    );
};
