import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/config'
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const itemRef = doc(db, "productos", itemId)
        getDoc(itemRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="item_detail_container">
            {
                loading
                    ? <Loader/>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer

