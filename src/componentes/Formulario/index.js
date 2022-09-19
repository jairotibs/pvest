import CampoTexto from "../CampoTexto";

const Formulario = () =>{
    return (
        <div>
            <CampoTexto nome={Nome} />
            <CampoTexto cpf={cpf} />
            <CampoTexto endereco={endereco} />
            <CampoTexto escolaridade={escolaridade}/>
            <Area></Area>
        </div>
    )
}
export default Formulario;