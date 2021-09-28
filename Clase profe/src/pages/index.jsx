import CardRazaperros from 'components/CardRazaPerros';
import img1 from 'media/Bordercolllie.jpg';
import img2 from 'media/rodeshian.jpg';
import log1 from 'media/logo.png';
function Index(){
    return (
        <div>
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
export default Index