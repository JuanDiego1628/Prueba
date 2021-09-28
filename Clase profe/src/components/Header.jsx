import log1 from 'media/logo.png';

const Header=()=>{
    return(
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
    );
}
export default Header