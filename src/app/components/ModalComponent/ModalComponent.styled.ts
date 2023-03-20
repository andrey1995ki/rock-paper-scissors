import styled from "styled-components";
import {theme} from "../../../assist/styles/theme";

export const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${theme.colors.greyBg};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalWindow = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media ${theme.media.changePoint} {
    width: 400px;
    height: 450px;
    border-radius: 25px
  }
`
export const ModalTitle = styled.div`
  margin-top: 50px;
  width: 90%;
  color: ${theme.colors.greyBlue};
  display: flex;
  justify-content: center;
  @media ${theme.media.changePoint} {
    justify-content: flex-start;
    margin-top: 5px !important;
  }

`
export const ModalClose = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 50px;
  @media ${theme.media.changePoint} {
    bottom: auto !important;
    top: 39px;
    right: 15px
  }
`
export const ModalContent = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.media.changePoint} {
    margin-top: 0px!important;
  }
`
