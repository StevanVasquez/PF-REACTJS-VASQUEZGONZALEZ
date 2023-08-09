import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.scss'

const ItemDetail = ({item}) => {
    
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }


    return (
        <div className="contenedor_principal_item_detail">
            <div className="container_item_detail">
                <h2 className="name_detail">{item.name_detail}</h2>
                <img src={item.img} alt={item.name}/>
                <p className="model_detail">{item.model}</p>
                <p className="precio_detail">Precio: ${item.precio * cantidad}</p>

            {
                isInCart(item.id)
                    ? <Link className="button_terminar_compra" to="/cart">Termina la compra</Link>
                    : <ItemCount 
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
            }
            </div>
        </div>
    )
}

export default ItemDetail