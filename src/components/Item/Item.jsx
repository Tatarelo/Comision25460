import { ItemCount } from "../ItemCount/ItemCount";
import { ProductDetail } from "../ProductDetail/ProductDetail";

export const Item = ({foto,id, nombre}) => {
  return (
    <div className="itemWrapper">
      <img src={foto} alt="Foto de producto" id={id} />
      <ItemCount
        stock={10}
        initial={0}
        onAdd={(n) => console.log(`Producto${n}`)}
      />
      <p className="productName">{nombre}</p>
      <ProductDetail/>
    </div>
  );
};
