//import logo from './logo.svg';
import './App.css';
import ConteinerAulasDia from './componentes/ConteinerAulasDia';
import NavBar from './componentes/NavBar';
import PaginaEmConstrucao from './componentes/PaginaEmConstrucao';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom'

function App() {
  //lista de itens da âncora
  const listaAncora = [{link:'', mensagem:'Home'}, {link:'', mensagem:'Inscricoes'},{link:'', mensagem:'Institucional'}, {link:'', mensagem:'Sobre Nós'}]
  return (
    <Router>
    <div className="App">
      <NavBar listaMenu={listaAncora}/>
      <div className="alinhamento">
      <ConteinerAulasDia />
      <PaginaEmConstrucao />
      </div>
    </div>
    </Router>
  )
}export default App;
