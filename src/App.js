import React,{useState} from "react";
import TabelaIMC from "./componentes/TabelaIMC";
import Peso from "./componentes/Peso";
import Altura from "./componentes/Altura";
import CalcularIMC from "./componentes/CalcularIMC"
import Resultado from "./componentes/Resultado";

function App() {

  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)

  return (
    <>
      <Peso p={peso} sp={setPeso} />
      <Altura a={altura} sa={setAltura} />
      <CalcularIMC p={peso} a={altura} sr={setResultado} />
      <Resultado r={resultado}/>
      <TabelaIMC/>
    </>
  )
}

export default App;
