import styled from "styled-components";
import {motion} from "framer-motion";

export const ContainerHeader = styled.div`
  .sticky {
    background-color: red !important;
  }
`;

export const Buttons = styled(motion.button)`
  padding: 15px 45px;
  margin: 0 30px;
  border: none;
  font-size: 18px;
  color: white;
  border-radius: 5px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.secondary} 50%,
    ${({ theme }) => theme.third} 50%
  );
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: left;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-position: right;
    color: black;
  }
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5rem;
  position: relative;
  z-index: 5;
`;

export const DivPrueba = styled(motion.div)`
  position: relative;
  z-index: 20;

  .wrap-container {
    position: fixed;
    z-index: 2;
    width: 100%;
    transition: 0.6s;
    background-color: transparent;
    height: max-content;
  }
  .containerHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    transition: 0.6s;
    background-color: transparent;
  }

  .containerHeader.active {
    background-color: black;
  }

  .search.active {
    background-color: #FCA311;
  }

  h1 {
    margin-left: 50px;
  }
`;


export const ButtonLogOut = styled.button`
  background-color: ${({theme}) => theme.red};
  color: white;
  font-size: 20px;
  padding: 9px 15px;
  border: none;
  border-radius: 10px;
  margin: 10px 20px;
  cursor: pointer;
`

export const DivUser = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    z-index: 3;
    top: 0px;
    left: ${({open}) => open ? '0' : '-100%'};
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`

export const DivUserText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .userName {
    margin: 0 10px;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    .iconMenu {
      font-size: 30px;
      display: flex;
      justify-content: flex-end;
      display: relative;
      z-index: 5;
    }
  }
  

`

