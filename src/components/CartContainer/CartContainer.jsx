import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  // query,
  // documentId,
  // where,
  // getDocs,
  // writeBatch,
} from "firebase/firestore";
import { useState } from "react";
import { Cart } from "../Cart/Cart";

export const CartContainer = () => {
  const [congrat, setCongrat] = useState(false);
  const [id, setId] = useState("");
  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const [dataForm, setDataForm] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const {
    cartList,
    vaciarCart,
    deleteItem,
    total,
    cantidadTotal,
    setCartList,
  } = useCartContext();

  const generarOrden = async () => {
    let orden = {};
    orden.buyer = dataForm;
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
      .then((resp) => setId(resp.id))
      .catch((err) => console.error(err))
      .finally(() => console.log("terminado"));

    // const queryActualizarStock = query(
    //   queryColection,
    //   where(
    //     documentId(),
    //     "in",
    //     cartList.map((it) => it.id)
    //   )
    // );

    // const batch = writeBatch(db);

    // getDocs(queryActualizarStock).then((resp) =>
    //   resp.docs.forEach((res) =>
    //     batch.update(res.ref, {
    //       stock:
    //         res.data().stock -
    //         cartList.find((item) => item.id === res.id).cantidad,
    //     })
    //   )
    // );
    // batch.commit();
  };

  return (
    <div className="cart">
      <div className="cartDetail">
        {cartList.map((item) => (
          <Cart
            key={item.id}
            foto={item.foto}
            id={item.id}
            nombre={item.nombre}
            detail={item.detail}
            stock={item.stock}
            precio={item.precio}
            cantidad={item.cantidad}
            deleteItem={deleteItem}
          />
        ))}
      </div>
      <div className="cartDetail_sub">
        {!congrat && cartList.length > 0 && (
          <form className="cartForm" onSubmit={generarOrden}>
            <input
              className="cartForm_input"
              type="text"
              name="name"
              placeholder="name"
              value={dataForm.name}
              onChange={handleChange}
            />
            <input
              className="cartForm_input"
              type="text"
              name="phone"
              placeholder="tel"
              value={dataForm.phone}
              onChange={handleChange}
            />
            <input
              className="cartForm_input"
              type="email"
              name="email"
              placeholder="email"
              value={dataForm.email}
              onChange={handleChange}
            />
          </form>
        )}
        <div className="cartDetail_buttons">
          {cartList.length === 0 && <h1>Carrito vacio!</h1>}
          <Link to="/Fawkes">
            <button className="borrarItem">Volver al inicio</button>
          </Link>
          {!congrat && cartList.length > 0 && (
            <button className="vaciarCart" onClick={vaciarCart}>
              Vaciar carrito
            </button>
          )}
          </div>
        </div>

      <p className="total" hidden={cantidadTotal < 1}>
        Total carrito: ${total}
      </p>
      <div className="cartCongrat">
      {congrat && id.length !== "" && `Orden de compra n°: ${id}`}
      {congrat && <p>Gracias por su compra!</p>}
      {!congrat && (
        <button
          className="vaciarCart"
          hidden={cantidadTotal < 1}
          onClick={() => {
            generarOrden();
            setCongrat(true);
            setCartList([]);
          }}
        >
          Generar pago
        </button>
      )}
      </div>
    </div>
  );
};
