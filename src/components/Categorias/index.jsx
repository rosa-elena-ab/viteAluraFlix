import "./Categorias.css"

const Categorias = (props) => {
    //Destructuracion

    return <>
        {
            <section className="categoria" >
                <h3 >{props.categoria}</h3>
            </section>
        }
    </>
}

export default Categorias