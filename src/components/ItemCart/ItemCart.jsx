import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const ItemCart = () => {
  const {cantidadTotal} = useCartContext()
  return (
    <div>
    <NavLink to="/cart">
      <img
        className="logoCarrito"
        src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
        alt="LogoCarrito"
      />
    </NavLink>
    <p className="itemsCart">{cantidadTotal}</p>
    </div>
  );
};
