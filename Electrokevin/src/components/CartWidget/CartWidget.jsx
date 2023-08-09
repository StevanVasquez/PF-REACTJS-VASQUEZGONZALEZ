import { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import './CartWidget.scss'

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className='link_shopping_cart'>
        
        <AiOutlineShoppingCart className="shopping_cart"/>
        <span className="cantidad_cart">{totalCantidad()}</span>
        
        </Link>   

    )
}

export default CartWidget