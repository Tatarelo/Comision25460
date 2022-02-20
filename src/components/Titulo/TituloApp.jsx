const TituloApp = ({titulo, subtitulo, saludo}) => {
    return(
        <div>
            <h1>{titulo}</h1>
            <h1>{subtitulo}</h1>
            <button onClick={saludo}>Ejecutar saludo</button>
        </div>
    )
}

export default TituloApp