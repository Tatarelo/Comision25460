import { ItemCount } from "../ItemCount/ItemCount";
export const ItemDetail = ({detail,foto,precio}) => {
  return (
    <div className="detailWrapper">
      <p>{detail}</p>
      <img src={foto} alt="Foto detalle"/>
      <p>{precio}</p>
      <ItemCount
        stock={10}
        initial={0}
        onAdd={(n) => console.log(`Producto${n}`)}
      />
    </div>
  );
};