import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Header } from './components/Header/Header'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./Context/CartContext"
import CartView from "./components/CartView/CartView"
import FormOrder from "./components/FormOrder/FormOrder"

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>

          <Header/>

          <Routes>

            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
            <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
            <Route path="/cart" element={<CartView/>}/>
            <Route path="/formorder" element={ <FormOrder /> }/>

          </Routes>

        </BrowserRouter>
      </CartProvider>  
    </>
  )
}

export default App
