import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { ProductDetail } from "../ProductDetail/ProductDetail";

export const Item = ({ foto, id, nombre, stock }) => {
  return (
    <div className="itemWrapper">
      <img
        src={foto}
        alt="Foto de producto"
        id={id}
        className={`producto${id}`}
      />
      <ItemCount
        stock={stock}
        initial={0}
        onAdd={(n) => console.log(`Producto${n}`)}
      />
      <p className="productName">{nombre}</p>
      <label className="stock">Stock disponible:{stock}</label>
      <Link to={`/detail/${id}`}>
        <ProductDetail />
      </Link>
    </div>
  );
};
