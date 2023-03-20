import styled, {css} from "styled-components";
import {theme} from "../../../assist/styles/theme";

export const GameField = styled.div`
  width: 75vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.media.changePoint} {
    width: 45vw;
  }
`
export const Game = styled.div<{ selectedItem: boolean }>`
  position: relative;
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media ${theme.media.changePoint} {
    align-items: flex-start;
  };
  ${({selectedItem}) => selectedItem && css`
    transition: ${theme.animations.transition};
    width: 100%;
  `}

`
