import { useState } from "react";
export const ItemCount = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);
  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="divCount">
      <label className="count">{count}</label>
      <button className="botonDecrementar" onClick={decrementar}>
        -
      </button>
      <button className="botonIncrementar" onClick={incrementar}>
        +
      </button>
      <button
        className="botonCarrito"
        disabled={count === 0}
        onClick={() => onAdd(count)}
      >
        <p className="botonCarrito_texto">Agregar al carrito</p>
      </button>
    </div>
  );
};
