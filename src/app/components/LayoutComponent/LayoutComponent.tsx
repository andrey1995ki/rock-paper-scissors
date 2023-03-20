import React, {useState} from 'react';
import {HeaderComponent} from "../HeaderComponent/HeaderComponent";
import {GameComponent} from "../GameComponent/GameComponent";
import {FooterComponent} from "../FooterComponent/FooterComponent";
import {Layout, LayoutGroup} from "./LayoutComponent.styled";
import {ModalComponent} from "../ModalComponent/ModalComponent";


export const LayoutComponent = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <Layout>
            <LayoutGroup>
                <HeaderComponent/>
                <GameComponent/>
                <FooterComponent setShowModal={setShowModal}/>
            </LayoutGroup>
            <ModalComponent open={showModal} setShowModal={setShowModal}/>
        </Layout>
    );
};
