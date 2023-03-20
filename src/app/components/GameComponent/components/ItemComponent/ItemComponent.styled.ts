import styled, {css, keyframes} from "styled-components";
import {ItemDivProps} from "./ItemComponent.model";
import {theme} from "../../../../../assist/styles/theme";

export const pulse = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
`;

export const Item = styled.div<ItemDivProps & { selectedItem: boolean, selectedHome: boolean, endGame: boolean }>`
  z-index: 0;
  display: flex;
  width: 110px;
  height: 110px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${({top}) => top};
  left: ${({left}) => left};
  cursor: pointer;
  ${({selectedItem, endGame}) => selectedItem && css`
    transition: ${theme.animations.transition};
    width: 135px;
    height: 135px;
    cursor: default;
    @media ${theme.media.changePoint} {
      width: 210px;
      height: 210px;
      left: ${endGame ? -100 : -15}px;
    }
  `}
  ${({selectedHome, endGame}) => selectedHome && css`
    top: 0;
    left: auto;
    right: -15px;
    width: 135px;
    height: 135px;
    cursor: default;
    @media ${theme.media.changePoint} {
      transition: ${theme.animations.transition};
      width: 210px;
      height: 210px;
      left: auto;
      right: ${endGame ? -100 : -15}px;
    }
  `}
`
export const ItemColor = styled.div<{ background: string, boxShadow: string }>`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 200px;
  background: ${({background}) => background};
  box-shadow: ${({boxShadow}) => boxShadow};
`
const animationTemplate = css`
  z-index: 0;
  position: absolute;
  content: '';
  width: 170px;
  height: 170px;
  background: ${theme.colors.greyBg};
  border-radius: 200px;
  animation: ${pulse} 1.5s linear infinite;
  @media ${theme.media.changePoint} {
    width: 300px;
    height: 300px;
  }
`
export const WinAnimationComponent = styled.div`
  ${animationTemplate}
  &:before {
    ${animationTemplate};
    opacity: 0;
    display: block;
    animation-delay: 0.25s;
  }

  &:after {
    ${animationTemplate};
    opacity: 0;
    display: block;
    animation-delay: 0.5s;
  }
`
export const ItemSVG = styled.div<{ selectedItem: boolean }>`
  z-index: 1;
  background: ${theme.colors.white};
  width: 85px;
  height: 85px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  box-shadow: 0px -3px 0px #dddddd;
  ${({selectedItem}) => selectedItem && css`
    transition: ${theme.animations.transition};
    width: 100px;
    height: 100px;
    @media ${theme.media.changePoint} {
      width: 160px;
      height: 160px;
    }
  `}
`
