import logo from './logo.svg';
import './App.css';
import img1 from './media/Bordercolllie.jpg';
import img2 from './media/rodeshian.jpg';
import log1 from './media/logo.png';

function App() {
  return (
      <div className="App">
       <header>
        <ul className="navbar">

            <li>
              <img src={log1} alt="Logo" className="logo" title="Perro1"/></li>
            <li>
                <button className="button mainbutton">Nuevo Post</button>
            </li>
            
            <li>
                <button className="button">Login</button>
            </li>
            <li>
                 <div className="buscar">
                    <input placeholder="Busqueda"/>
                    <i className="fas fa-search-plus button iconoBusqueda"></i>
                </div>
            </li>
            <li>
                <button className="button mainbutton">Regitro1</button>
            </li>
        </ul>
        
    </header>
    <main>
        <section>
            <h1>Raza de Perros</h1>
            <ul className="alineacion">
                <CardRazaperros razaname="BorderCollie" imagen={img1}/>
                <CardRazaperros razaname="Rhodesian" imagen={img2}/>                
                
            </ul>
        </section>
        <section></section>
    </main>
    
   </div>
  );
}
function CardRazaperros({razaname,imagen}){
    return (
        <li className="breedcard">
            <div className="contenedorImagenes">
                <img  src={imagen} alt={razaname}/>
            </div>
            <span className="title">{razaname}</span>
            
        </li>
    );
}


export default App;
