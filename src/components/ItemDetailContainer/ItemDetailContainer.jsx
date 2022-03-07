import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";import { getFetchProd } from "../helper/getFetch";

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState([true]);
    // useEffect (() => {
    //     getFetch
    //     .then(resp => setProducto(resp.find(prod => prod.id === 2)))
    // }, [])

    useEffect (() => {
        getFetchProd
        .then((resp) => setProducto(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [])
    console.log(producto)
    return (
        <div>
            {loading ? <h1>Cargando...</h1> :  <ItemDetail producto={producto}/>}
        </div>
    )
}