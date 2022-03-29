import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import { CartContainer } from "./components/CartContainer/CartContainer";

export const App = () => {
  return (
    <CartContextProvider value={{}}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/Fawkes" element={<ItemListContainer />} />
            <Route
              path="/catalogo/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/*" element={<Navigate to="/Fawkes" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
};
