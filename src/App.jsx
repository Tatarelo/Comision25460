import logo from "./logo.svg";
import "./App.css";
// import TituloApp from "./components/Titulo/TituloApp";
// import InputApp from "./components/input/input";
// import ComponenteContenedor from "./components/ComponenteContenedor";
// import ComponenteImagen from "./components/Titulo/IconoCart";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Div from "./components/Div";


function App() {
  // const tit = 'Este titulo viene de app'
  // const saludo = () => console.log('saludo de app')
  console.log(App)
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
        {/* <TituloApp titulo={tit} subtitulo='soy subtitulo' saludo={saludo}/> */}
        {/* <InputApp><ComponenteImagen/><ComponenteImagen/></InputApp> */}
        {/* <ComponenteContenedor saludo='hola soy saludo de contenedor'/> */}
    </div>
  );
}

export default App;
