import React, { useState } from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { temaClaro, temaEscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import MudancaTema from "./Components/MudancaTema";

 

function App() {
 
  const [tema,setTema] = useState()

  const toogleTema = () =>{
    setTema((tema)=>!tema)
  }
 
  return (
    <ThemeProvider theme={tema? temaClaro : temaEscuro}>
      <GlobalStyle/>
      <BtnTema onClick={toogleTema}>
        <MudancaTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
