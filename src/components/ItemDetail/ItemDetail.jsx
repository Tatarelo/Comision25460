import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ productos }) => {
  const { agregarCart } = useCartContext();
  const [congrat, setCongrat] = useState(false);
  return (
    <div className="detailWrapper">
      <h1 className="detailWrapper_text">{productos.detail}</h1>
      <div className="detailWrapper_div1">
        <img
          src={productos.foto}
          alt="Foto detalle"
          className='imgs'
          id={productos.id}
        />
        <label className="count">Disponible:{productos.stock}</label>
        <p className="detailWrapper_text">${productos.precio}</p>
      </div>

      {congrat && (
        <NavLink to="/cart">
          <button className="terminarCompra">Terminar compra</button>
        </NavLink>
      )}
      {!congrat && (
        <ItemCount
          stock={productos.stock}
          initial={0}
          onAdd={(count) => {
            setCongrat(true);
            agregarCart({ ...productos, cantidad: count });
          }}
        />
      )}
    </div>
  );
};
