import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helper/getFetch";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () =>{
  // let url = 'https://pokeapi.co/api/v2/pokemon/?limit=10'
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([true]);
  const {categoriaId} = useParams()

  useEffect(() => {
    getFetch
    .then((respuesta) => {
      return respuesta;
    })
    .then((resp) => setProductos(resp.filter(pro => pro.categoria === categoriaId)))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
    }, []);
  
  console.log(productos);
  console.log(categoriaId)
  
  // useEffect (() => {
  //   fetch(url)
  //   .then(resp => resp.json())
  //   .then(resp => console.log(resp.results))
  // }, [])

  return (
    <div className="divItem">
      {loading ? <h1>Cargando...</h1> : <ItemList productos={productos} />}
    </div>
  );
  }
