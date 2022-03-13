import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";import { getFetchProd } from "../helper/getFetch";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [productos, setProductos] = useState({});
    const [loading, setLoading] = useState([true]);
    const {detailId} = useParams()
    // console.log(detailId)
    // useEffect (() => {
    //     getFetch
    //     .then(resp => setProducto(resp.find(prod => prod.id === 2)))
    // }, [])

    useEffect (() => {
        getFetchProd
        .then((resp) => setProductos(resp.find(prod => prod.id === 1)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [])
    // console.log(productos)
    return (
        <div>
            {loading ? <h1>Cargando...</h1> :  <ItemDetail productos={productos}/>}
        </div>
    )
}

