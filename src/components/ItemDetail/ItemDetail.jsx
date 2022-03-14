import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
export const ItemDetail = ({ productos }) => {
  const [congrat, setCongrat] = useState(false);
  console.log(congrat);
  return (
    <div className="detailWrapper">
      <p className="detailWrapper_text">{productos.detail}</p>
      <img
        src={productos.foto}
        alt="Foto detalle"
        className={`producto${productos.id}`}
        id={productos.id}
      />
      <p className="detailWrapper_text">{productos.precio}</p>
      <label className="count">Stock disponible:{productos.stock}</label>
      {congrat && <NavLink to='/cart'><button className="terminarCompra" >Terminar compra</button></NavLink>}
      {!congrat && (
        <ItemCount
          stock={productos.stock}
          initial={0}
          onAdd={(n) => setCongrat(true)}
        />
      )}
    </div>
  );
};
