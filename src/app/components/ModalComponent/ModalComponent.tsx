import React, {FC} from 'react';
import {Modal, ModalClose, ModalContent, ModalTitle, ModalWindow} from "./ModalComponent.styled";
import {CloseSvg, RulesBonusSvg, RulesSvg} from "../SVG/RulesSVG/RulesSVG";
import {useSelector} from "react-redux";
import {GameSelector} from "../../store/game/game.selector";
import {ModalComponentProps} from "./ModalComponent.model";

export const ModalComponent: FC<ModalComponentProps> = ({open, setShowModal}) => {
    const {currentMode} = useSelector(GameSelector)
    if (!open) return <></>
    return (
        <Modal>
            <ModalWindow>
                <ModalClose onClick={() => setShowModal(false)}>
                    <CloseSvg/>
                </ModalClose>
                <ModalTitle>
                    <h1>RULES</h1>
                </ModalTitle>
                <ModalContent>
                    {currentMode === 'default' ? <RulesSvg/> : <RulesBonusSvg/>}
                </ModalContent>
            </ModalWindow>
        </Modal>
    );
};
