import Card from "../ItemCard/ItemCard"
import './Itemlist.scss'

const ItemList = ({productos}) => {

    return (
        <>
            <h2 className="item_list_title">PRODUCTOS</h2>
            <p className="item_list_description">Vendemos productos de tecnologia 100% original </p>

            <div className="container_item_list">
                {
                    productos.map((prod) => <Card key={prod.id} item={prod}/>)
                }
            </div>
        </>    
    )
}

export default ItemList