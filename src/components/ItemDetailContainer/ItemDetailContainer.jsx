import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getFirestore, getDoc} from 'firebase/firestore'

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([true]);
  const { detailId } = useParams();

  useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'productos', detailId)
    getDoc(queryDb)
    .then(resp => setProductos({id: resp.id, ...resp.data()}))
    .finally(() => setLoading(false))
  },[])
  return (
    <div>
      {loading ? <h1>Cargando...</h1> : <ItemDetail productos={productos} />}
    </div>
  );
};
