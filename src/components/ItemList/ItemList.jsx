import { Item } from "../Item/Item";
import { memo } from "react";

export const ItemList = memo(
  ({ productos }) => {
    return productos.map((prod) => (
      <Item
        key={prod.id}
        foto={prod.foto}
        id={prod.id}
        nombre={prod.nombre}
        detail={prod.detail}
        stock={prod.stock}
        precio={prod.precio}
      ></Item>
    ));
  },
  (oldProps, newProps) => oldProps.productos.lenght === newProps
);
