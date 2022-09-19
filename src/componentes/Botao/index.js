/*const Botao = (props) => {
    //uso de um state para manter atualizada um contador para cada conjunto
    //retirei daqui porque ele tem que estar no conjunto e não no bot
   // const[contadorPresenca, setContadorPresenca] = useState(0)

    return (
        //O botão receberá uma função e um possível conteúdo que pode ser uma imagem ou um conteúdo de texto
        <button onClick={props.funcao}>props.children</button>
    )
}
export default Botao;*/

const Botao = (props) =>{
    return(
        <button onClick={props.funcao}>{props.children}</button>
    )
    }
export default Botao;