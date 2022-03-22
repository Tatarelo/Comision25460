import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { ProductDetail } from "../ProductDetail/ProductDetail";
import { useCartContext } from "../../context/CartContext";

export const Item = (props) => {
  const { nombre, foto, id, stock } = props
  const { agregarCart } = useCartContext();
  return (
    <div className="itemWrapper">
      <h1 className="itemWrapper_productName">{nombre}</h1>
      <div className="itemWrapper_div1">
        <img
          src={foto}
          alt="Foto de producto"
          id={id}
          className={`producto${id}`}
        />
        <label className="stock">Disponible:{stock}</label>
      </div>
      <div className="itemWrapper_div2">
      <ItemCount
          stock={stock}
          initial={0}
          onAdd={(count) => {
            agregarCart({ ...props, cantidad: count });
          }}
        />
        <Link to={`/detail/${id}`}>
          <ProductDetail />
        </Link>
      </div>
    </div>
  )
}
