import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const ItemCart = () => {
  const {cantidadTotal} = useCartContext()
  return (
    <>
    {cantidadTotal > 0 && (
      <div>
    <p className="itemsCart">{cantidadTotal}</p>
    </div>
    )}
        <NavLink to="/cart">
      <img
        className="logoCarrito"
        src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
        alt="LogoCarrito"
      />
    </NavLink>
    </>
  );
};
