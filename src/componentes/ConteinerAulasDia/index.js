import AulaPresenca from "../AulaPresenca";
import './ConteinerAulasDia.css'
//import 
/*const ConteinerAulasDia = (props) => {
    <h2>Aulas do Dia</h2>
    return (
       
        props.listaAulaPresenca.map((item)=><AulaPresenca nomeLabel={item.nomeLabel}></AulaPresenca>)
       
    )
}
export default ConteinerAulasDia;*/

//const [] = useState()
const ConteinerAulasDia = () =>{
    const informacoes = [{materia:'Redação',diaSemana:'Segunda'},
                         {materia:'Química', diaSemana:'Segunda'}, 
                         {materia:'Matermática', diaSemana:'Segunda'}, 
                         {materia:'Física', diaSemana:'Terca'}, 
                         {materia:'Biologia', diaSemana:'Quarta'},
                         {materia:'Língua Estrangeira', diaSemana:'Quinta'}, 
                         {materia:'Gramática', diaSemana:'Sexta'},
                          {materia:'Historia', diaSemana:'Sexta'},
                        {materia:'Geografia', diaSemana:'Quinta'}]

    //retorna o dia da semana a partir da data atual                  
    const diaSemana = () =>{
        const dataHoje = new Date();
        const dia = dataHoje.getDay();
       
        switch(dia){
            case 0: return 'Domingo' ;
           
            case 1: return 'Segunda';
            
            case 2: return 'Terça';
           
            case 3: return 'Quarta';
           
            case 4: return 'Quinta';
           
            case 5: return 'Sexta';
            
            default: return 'Indefinido';
            
       
        }
       
        //return(dataHoje.getDay())
    }
    return(
        <section className="conteiner">
         <div>
            <h3>Aulas do Dia</h3>
            {informacoes.filter(info => info.diaSemana === diaSemana()).map((item)=><AulaPresenca key={item.materia} nome={item.materia}></AulaPresenca>)}
        </div>
        </section>
    )
}
export default ConteinerAulasDia;