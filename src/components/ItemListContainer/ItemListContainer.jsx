import { useState, useEffect } from "react";
import { getFetch } from "../helper/getFetch";
import { ItemList } from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    getFetch
      .then((respuesta) => {
        return respuesta;
      })
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(productos);

  return (
    <div>
      {loading ? <h1>Cargando...</h1> : <ItemList productos={productos} />}
    </div>
  );
}
