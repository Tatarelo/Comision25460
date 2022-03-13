import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helper/getFetch";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () =>{
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([true]);
  const {categoriaId} = useParams()

  useEffect(() => {
    if(categoriaId) {
      getFetch
      .then((respuesta) => {
        return respuesta;
      })
      .then((resp) => setProductos(resp.filter(prod => prod.categoria === categoriaId)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    } else {
      getFetch
      .then((respuesta) => {
        return respuesta;
      })
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    }
  }, [categoriaId]);
    
  // useEffect (() => {
  //   fetch(url)
  //   .then(resp => resp.json())
  //   .then(resp => console.log(resp.results))
  // }, [])
  console.log(categoriaId)
  return (
    <div className="divItem">
      {loading ? <h1>Cargando...</h1> : <ItemList productos={productos} />}
    </div>
  );
  }
