import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio", e)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Complete el formulario para crear una nueva tarjeta de video</h2>
            <CampoTexto titulo="Titulo" placeholder="Título del video" />
            <CampoTexto titulo="Video" placeholder="Enlace del video" />
            <CampoTexto titulo="Imagen" placeholder="Enlace de imagen" />
            <CampoTexto titulo="Descripción" placeholder="¿De que se trata este video?" />
            <ListaOpciones />
            <div className="divBotones">
                <Boton>
                    Crear
                </Boton>
                <Boton>
                    limpiar
                </Boton>
            </div>
            
        </form>
    </section>
}

export default Formulario