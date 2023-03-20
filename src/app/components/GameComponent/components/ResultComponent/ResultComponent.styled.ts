import styled, {css, keyframes} from "styled-components";
import {theme} from "../../../../../assist/styles/theme";

export const load = keyframes`
  0% {
    background: ${theme.colors.greyBg};
  }
  50% {
    background: ${theme.colors.darkBlueBg};
  }
  100% {
    background: ${theme.colors.greyBg};
  }
`;
export const result = keyframes`
  0%, 60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Text = styled.div<{ position: 'left' | 'right', endGame: boolean }>`
  z-index: 2;
  position: absolute;
  left: ${({position}) => position === 'left' ? '-15px' : 'auto'};
  right: ${({position}) => position === 'right' ? '-15px' : 'auto'};
  top: 140px;
  width: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  font-size: 1em;
  font-weight: bold;
  margin-block: 0.83em;
  @media ${theme.media.changePoint} {
    width: 210px;
    font-size: 1.5em;
    top: -80px;
    ${({endGame, position}) => endGame && css`
      transition: all 0.5s linear 0.1s;
      left: ${position === 'left' ? '-100px' : 'auto'};
      right: ${position === 'right' ? '-100px' : 'auto'};
    `}
  }

`
export const SkeletonItem = styled.div`
  position: absolute;
  border-radius: 200px;
  top: 0;
  left: auto;
  right: -15px;
  width: 135px;
  height: 135px;
  @media ${theme.media.changePoint} {
    width: 210px;
    height: 210px;
  }
  animation: ${load} 1s infinite;
`

export const Result = styled.div`
  z-index: 1;
  position: relative;
  animation: 0.5s ${result} ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.white};
`
export const Button = styled.button<{ win: boolean }>`
  border-radius: 10px;
  width: 200px;
  height: 50px;
  color: ${({win}) => win ? theme.colors.shadowBlue : theme.colors.red};
  background: ${theme.colors.white};
  font-weight: bold;
  cursor: pointer;
  border: none;
`
