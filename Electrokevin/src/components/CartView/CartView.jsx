import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import './CartView.scss'

const CartView = () =>{
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="cart_view_carrito_vacio">
                <h2 className="cart_view_carrito_vacio_content">Tu carrito está vacío :(</h2>
                <hr/>
                <Link to="/" className="buton_ir_a_comprar">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="contenedor_principal_cart_view">

            <h2 className="Title_cart_view">Tus compras</h2>
            
            <div className="cart_view_container">

            {
                cart.map((item) => (
                    <div key={item.id} className="cart_view_content">
                        <h3 className="cart_view_content_name">{item.name_detail}</h3>
                        <img src={item.img} alt={item.nombre}/>
                        <p className="cart_view_content_precio">Precio: ${item.precio * item.cantidad}</p>
                        <p className="cart_view_content_cantidad">Cantidad: {item.cantidad}</p>
                        <button onClick={() => removerDelCarrito(item.id)} className="cart_view_content_button"><FaTrashAlt/></button>
                    </div>
                ))
            }
            </div>

            <div className="cart_view_content_total">
                <h4 className="cart_view_total">Total: ${totalCompra()}</h4>
                <button onClick={vaciarCarrito} className="cart_view_total_boton">Limpiar carrito</button>
                <Link className="boton_terminar_compra" to="/formorder">Terminar mi compra</Link>
            </div>           
        </div>
    )
}

export default CartView