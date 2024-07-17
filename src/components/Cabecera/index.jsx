import { Link } from "react-router-dom"
import styled from "styled-components";
import homeActivo from "./homeSeleccionado.png";
import homeinactivo from "./homeNoSeleccionado.png";
import addActivo from "./addSeleccionado.png";
import addinactivo from "./addNoSeleccionado.png";
import CabeceraLink from "../CabeceraLink/CabeceraLink.jsx"

const HeaderEstilizado = styled.header`
  display: none;
  @media (width > 768px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000;
    padding: 40px 0;
   
    img{
        width: 190px;
    }
  }
`;

const ShadowStyles = styled.div`


  @media (width > 768px) {
    width: 100%;
    height: 4px;
    position: absolute;
    top: 125px;
    left: 0;
    background-color: #2271d1;
    box-shadow: 10px 10px 18px #2271d1;
  }
`;



const ButtonContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (width > 768px) {
    width: auto;
    gap: 25px;
  }
`;

const Cabecera = ({ logo }) => {
    
    return <HeaderEstilizado>
        <ShadowStyles />
            <Link to="/">
                <img src="./img/Logo.svg" alt="Logo Alura"/>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    Home
                </CabeceraLink>
                <CabeceraLink url="./Add">
                   Agregar
                </CabeceraLink>
            </nav>
        <ButtonContainer>
        
      </ButtonContainer>
    </HeaderEstilizado>
};

export default Cabecera;


