import {Link} from 'react-router-dom'
function CardRazaperros({razaname,imagen,url}){
    return (
        <li className="breedcard">
            <Link to={url}>
                <div className="contenedorImagenes">
                    <img  src={imagen} alt={razaname}/>
                </div>
                <span className="title">{razaname}</span>
           </Link>
          
            
        </li>
    );
}
export default CardRazaperros