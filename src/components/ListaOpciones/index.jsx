import "./ListaOpciones.css"

const ListaOpciones = () => {

    //Metodo map -> arreglo.map( (equipo, index) => { 
    //    return <option></option>
    // })
    const categorias = [
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]



    return <div className="lista-opciones">
        <label>Categoria</label>
        <select>
            {categorias.map((categoria, index) => <option key={index}>{categoria}</option>)}
        </select>
    </div>
}

export default ListaOpciones