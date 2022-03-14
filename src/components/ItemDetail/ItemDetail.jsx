import { ItemCount } from "../ItemCount/ItemCount";
export const ItemDetail = ({ productos }) => {
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
      <ItemCount
        stock={productos.stock}
        initial={0}
        onAdd={(n) => console.log(`Producto${n}`)}
      />
    </div>
  );
};
