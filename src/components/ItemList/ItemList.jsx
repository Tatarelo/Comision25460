import { Item } from "../Item/Item"

export const ItemList = ({productos}) =>{
    return productos.map((prod) => <Item key={prod.id} foto={prod.foto} id={`producto${prod.id}`} nombre={prod.nombre} detail={prod.detail}></Item>)
}