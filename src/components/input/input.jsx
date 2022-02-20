import TituloApp from "../Titulo/TituloApp"

const InputApp = (obj) => {
    console.log(obj)
    return <div>
        <TituloApp titulo={'soy titulo de input'} subtitulo='soy subtitulo de input' saludo={(saludo) => console.log('saludo')}/>
        <input/>
        {obj.children[0]}
      </div>
  }

  export default InputApp 