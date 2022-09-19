import { useState } from "react";
import Botao from "../Botao";

const AulaPresenca = (props) =>{
    const [contador, setContador] = useState(0)
    return(
        <div>
            <label>{props.nome}</label>
            <Botao funcao={()=>setContador(contador + 1)}>Confirmar Presença</Botao>
            <p>{contador} pessoas confirmadas</p>
       </div>
    )
}
export default AulaPresenca;