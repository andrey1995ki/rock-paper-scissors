import styled from "styled-components";
import {theme} from '../../../assist/styles/theme'

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${theme.colors.mainBg};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;  
`
export const LayoutGroup = styled.div`
  height: calc(100vh - 40px);
  display: flex;
  flex-flow: column nowrap;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;
`
