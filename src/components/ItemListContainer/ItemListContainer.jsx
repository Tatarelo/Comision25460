import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([true]);
  const { categoriaId } = useParams();

useEffect(() => {
  const db = getFirestore()
  if(categoriaId){
  const queryColection = collection(db, 'productos',)
  const queryFilter = query(queryColection, where('categoria', '==', categoriaId))
  getDocs(queryFilter)
  .then(resp => setProductos( resp.docs.map(item => ({id:item.id, ...item.data()}))))
  .catch(err => console.log(err))
  .finally(() => setLoading(false));
  } else {
    const queryColection = collection(db, 'productos')
    getDocs(queryColection)
    .then(resp => setProductos(resp.docs.map(item => ({id: item.id, ...item.data()}))))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }
},[categoriaId])

  return (
    <div className="divItem">
      {loading ? <h1>Cargando...</h1> : <ItemList productos={productos} />}
    </div>
  );
};
