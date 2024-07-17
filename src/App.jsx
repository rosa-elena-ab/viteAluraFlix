import "normalize.css";
import Cabecera from "./components/Cabecera";
import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"

const FondoGradiente = styled.div`

background: linear-gradient(175deg, #04244f 4.16%, #041833 48%, #000000  96.76%);
width: 100%;
min-height: 100vh;
`

function App() {

  return (
    <>
      <FondoGradiente>
      <GlobalStyle/>
        <Cabecera/>
      </FondoGradiente>
    </>
  )
}

export default App
