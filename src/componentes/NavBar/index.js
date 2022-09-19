import './NavBar.css'
const NavBar = (props) =>{
    //const listaMenu = [{link:, conteudo:}]
    return(
        <nav className='navbar'>
         <div className='links'>
          
         {props.listaMenu.map((item)=><a href={item.link}>{item.mensagem}</a>)}
         
         </div>
        </nav>
        
    )
}
export default NavBar;