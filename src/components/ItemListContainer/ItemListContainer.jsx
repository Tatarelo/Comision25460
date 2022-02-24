import Div from "../Div"
import {useState, useEffect} from "react"

export default function ItemListContainer({div}) {

  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(true)

  // useEffect(() => {
  //   console.log("llamada api o tarea asincronica pesada 1 siempre")
  //   return () => {console.log("limpiar de volver a ejecutar")}
  // })

  // useEffect(() => {
  //   console.log("llamada api o tarea asincronica pesada 2 - una vez sola al principio")
  // }, [])


  // useEffect(() =>{
  //   console.log("solo si cambia bool")
  // }, [bool])


  // const array = useState()

  const incrementar = () => {
    console.log(count)
    if(count >= 0 && count < 10) {
      setCount(count + 1)
    } else{console.log("Ha superado el limite de stock")}
  }

  const decrementar = () => {
    if(count > 0 && count <= 10) {
      setCount(count - 1)
    } else{console.log("Ha superado el limite de stock")}
    console.log(count)
  }

  

  return (
    <div>
      {/* <Div/> */}
      {/* <ItemCount initial= {1}, stock={10} onAdd={mostrarCantidad}/> */}
      <p className='textoCarrito'>Carrito</p>
      <button className='botonDecrementar' onClick={decrementar}>-</button>
      <label className='count'>{count}</label> 
      <button className='botonIncrementar' onClick={incrementar}>+</button>
      {/* <button onClick={ () => setBool(!bool)}>Booleano</button> */}
      </div>
  )
}
