import React from 'react';
import {ReactComponent as Logo} from "../../../../assist/svg/logo.svg";
import {ReactComponent as LogoBonus} from "../../../../assist/svg/logo-bonus.svg";


export const LogoSvg = () => {
    return (
        <Logo viewBox="0 0 180 100"/>
    );
};
export const LogoBonusSvg = () => {
    return (
        <LogoBonus viewBox="0 0 115 114"/>
    );
};
