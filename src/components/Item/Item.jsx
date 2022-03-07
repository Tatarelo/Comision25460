import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({ foto }) => {
  return (
    <div>
      <img src={foto} alt="" />
      <ItemCount
        stock={10}
        initial={0}
        onAdd={(n) => console.log(`Producto${n}`)}
      />
    </div>
  );
};
