import './ItemCount.scss'


const ItemCount = ({max, cantidad, setCantidad, agregar}) => {
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div className="item_count">

            <div className="botones_contador">
                <button 
                    onClick={handleRestar} 
                    className="mx-2 button-count-menos"
                    disabled={cantidad === 1}
                >-
                </button>

            <span className="cantidad-count">{cantidad}</span>

            <button 
                onClick={handleSumar} 
                className="mx-2 button-count-mas"
                disabled={cantidad === max}
            >+</button>
            </div>

            <button onClick={agregar} className="my-2 button_agregar_carrito">Agregar al carrito</button>

        </div>
    )
}

export default ItemCount