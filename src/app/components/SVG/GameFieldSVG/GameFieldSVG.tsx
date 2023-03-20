import {ReactComponent as Triangle} from "../../../../assist/svg/bg-triangle.svg";
import {ReactComponent as Pentagon} from "../../../../assist/svg/bg-pentagon.svg";
import React from "react";

export const TriangleSVG = () => {
    return (
        <Triangle/>
    );
};
export const PentagonSVG = () => {
    return (
        <Pentagon viewBox="0 0 330 330"/>
    );
};
