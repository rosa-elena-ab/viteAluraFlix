import Cabecera from "../../components/Cabecera";
import Banner from "../../components/Banner";
import Formulario from "../../components/Formulario";
import Categorias from "../../components/Categorias";
import Footer from "../../components/Footer";

const categorias = [
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión"
]

function Inicio(){

    return(
        <>
        <Cabecera/>
        <Banner  color="#154580"></Banner>
        <Formulario></Formulario>
        <Categorias categoria="Front End" />
        <Categorias categoria="Data Science" />
        <Categorias categoria="Devops" />
        <Categorias categoria="Ux y Diseño" />
        <Categorias categoria="Móvil" />
        <Categorias categoria="Inovación y Gestión" />
        <Footer></Footer>
        </>
        
    )
}

export default Inicio;