import styled from "styled-components";
import {theme} from "../../../assist/styles/theme";


export const Header = styled.div`
  border: 5px solid ${theme.colors.greyBlue};
  border-radius: 10px;
  padding-inline: 15px;
  padding-block: 5px;
  width: 70vw;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;

  @media ${theme.media.changePoint} {
    width: 40vw;
    padding-block: 15px;
  }
`
export const SVG = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  height: 90%;`

export const Score = styled.div`
  background: ${theme.colors.white};
  width: 100px;
  height: 90%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
`
export const ScoreTitle = styled.h4`
  color: ${theme.colors.blue};
  margin: 0;
`
export const ScoreResult = styled.h1`
  color: ${theme.colors.shadowBlue};
  margin: 0;
  font-size: 3em;
`
