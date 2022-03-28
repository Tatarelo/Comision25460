import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  query,
  documentId,
  where,
  getDocs,
  writeBatch,
} from "firebase/firestore";

export const Cart = () => {
  const { cartList, vaciarCart, deleteItem, total, cantidadTotal } =
    useCartContext();

  const generarOrden = async () => {
    let orden = {};

    orden.buyer = {
      nombre: "Facundo",
      telefono: "1155545648",
      email: "facundo@gmail.com",
    };

    orden.total = cantidadTotal;
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const precio = cartItem.precio * cartItem.cantidad;
      return { id, nombre, precio };
    });
    console.log(orden);
    const db = getFirestore();
    const queryColection = collection(db, "ordenes");
    addDoc(queryColection, orden)
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err))
      .finally(() => console.log("terminado"));

    // const queryUpdate = doc(db,'productos', '4xax86ZtCazwEDsVcy74')
    // updateDoc(queryUpdate, {
    //   stock: 10
    // })

    // const queryActualizarStock = await query(
    //   queryColection,
    //   where(
    //     documentId(),
    //     "in",
    //     cartList.map((it) => it.id)
    //   )
    // );

    // const batch = writeBatch(db)

    // getDocs(queryActualizarStock).then((resp) =>
    //   resp.docs.forEach((res) =>
    //     batch.update(res.ref, {
    //       stock:
    //         res.data().stock -
    //         cartList.find((item) => item.id === res.id).cantidad,
    //     })
    //   )
    // );
    // batch.commit()
  };

  return (
    <div>
      {cartList.map((item) => (
        <li
          className="cartList"
          key={item.id}
          foto={item.foto}
          id={item.id}
          nombre={item.nombre}
          detail={item.detail}
          stock={item.stock}
          precio={item.precio}
          cantidad={item.cantidad}
        >
          <h2>{item.nombre}</h2>
          <p>{item.detail}</p>
          <img src={item.foto} alt="imagen de producto" className="imgs" />
          <p className="cartList_p">Total individual: ${item.cantidad * item.precio}</p>
          <p className="">
            Cantidad seleccionada: {item.cantidad} (disponible: {item.stock})
          </p>
          <button className="borrarItem" onClick={() => deleteItem(item.id)}>
            Eliminar
          </button>
        </li>
      ))}
      <h1 hidden={cantidadTotal >= 1}>Carrito vacio!</h1>
      <Link to="/Fawkes">
        <button className="borrarItem">Volver al inicio</button>
      </Link>
      <button
        className="vaciarCart"
        onClick={vaciarCart}
        hidden={cantidadTotal < 1}
      >
        Vaciar carrito
      </button>
      <p className="total">Total carrito: ${total}</p>
      <button
        className="vaciarCart"
        hidden={cantidadTotal < 1}
        onClick={() => generarOrden()}
      >
        Generar pago
      </button>
    </div>
  );
};
