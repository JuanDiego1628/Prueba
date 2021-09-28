import CardRazaperros from 'components/CardRazaPerros';
import img1 from 'media/Bordercolllie.jpg';
import img2 from 'media/rodeshian.jpg';


function Index() {
    return (
        <section>
            <h1>Raza de Perros</h1>
            <ul className="alineacion">
                <CardRazaperros razaname="BorderCollie" imagen={img1} url="/borderCollie" />
                <CardRazaperros razaname="Rhodesian" imagen={img2}  url= "/rhodesian" />

            </ul>
        </section>
    );
}
export default Index
