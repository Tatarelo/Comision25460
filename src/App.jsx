import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import "./App.css";
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from './components/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
          <Routes>
            <Route path = '/Fawkes' element={<ItemListContainer/>}/>
            <Route path = '/detail' element = { <ItemDetailContainer/>}/>
            <Route path = '/*' element={<Navigate to='/Fawkes' replace />}/>
            <Route path = '/cart' element ={<Cart/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
