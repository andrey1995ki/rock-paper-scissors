import styled from "styled-components";
import {theme} from "../../../assist/styles/theme";

export const Footer = styled.div`
  width: 98vw;
  display: flex;
  justify-content: center;

  @media ${theme.media.changePoint} {
    justify-content: end;
  }
`
export const FooterGroup = styled.div`
  display: flex;
  width: 60vw;
  justify-content: space-between;
  @media ${theme.media.changePoint} {
    width: 350px;
  }
`
export const Button = styled.button`
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.greyBlue};
  border-radius: 10px;
  background: none;
  width: 100px;
  height: 50px;
  font-weight: bold;
  cursor: pointer;
  @media ${theme.media.changePoint} {
    width: 150px;
    height: 50px;
  }
`
