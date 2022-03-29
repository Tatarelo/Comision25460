export const Cart = (props) => {
    return (
        <li
          className="cartList"
        >
          <h2>{props.nombre}</h2>
          <p>{props.detail}</p>
          <img src={props.foto} alt="imagen de producto" className="imgs" />
          <p className="cartList_p">
            Total individual: ${props.cantidad * props.precio}
          </p>
          <p className="">
            Cantidad seleccionada: {props.cantidad} (disponible: {props.stock})
          </p>
          <button className="borrarItem" onClick={() => props.deleteItem(props.id)}>
            Eliminar
          </button>
        </li>
    )
}