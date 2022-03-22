import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const Cart = () => {
  const { cartList, vaciarCart, deleteItem, total, cantidadTotal } = useCartContext();

  return (
    <div>
      {cartList.map((item) => (
        <li className="cartList" 
            key={item.id}
            foto={item.foto}
            id={item.id}
            nombre={item.nombre}
            detail={item.detail}
            stock={item.stock}
            precio={item.precio}
            cantidad={item.cantidad}
        >
          <h2>{item.nombre}</h2>
          <p>{item.detail}</p>
          <img src={item.foto} alt="imagen de producto" className="producto1"/>
          <p className="cartList_p">${item.precio}</p>
          <p>{item.cantidad}</p>
          <button className="borrarItem" onClick={()=>deleteItem(item.id)}>Eliminar</button>
        </li>
      ))}
      <h1 hidden={cantidadTotal >= 1}>Carrito vacio!</h1>
      <Link to="/Fawkes"><button className="borrarItem">Volver al inicio</button></Link>
      <button className="vaciarCart" onClick={vaciarCart}>Vaciar carrito</button>
      <p className="total">Total carrito: ${total}</p>
    </div>
  );
};
