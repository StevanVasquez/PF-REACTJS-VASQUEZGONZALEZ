import { Link } from 'react-router-dom'
import { AiOutlineCloseSquare } from 'react-icons/ai'

const MenuList = ({close}) => {

    return (

    <>
    <nav onClick={(e) => e.stopPropagation()} className="menulist">
        <AiOutlineCloseSquare onClick={close} className='ml-auto close-menulist'/>

        <Link onClick={close} className="menulist__link" to="/">Inicio</Link>
        <Link onClick={close} className="menulist__link" to="/productos/computadoras">Computadoras</Link>
        <Link onClick={close} className="menulist__link" to="/productos/televisores">Televisores</Link>
        <Link onClick={close} className="menulist__link" to="/productos/parlantes">Parlantes</Link>
        <Link onClick={close} className="menulist__link" to="/productos/celulares">Celulares</Link>
        <Link onClick={close} className="menulist__link" to="/productos/audifonos">Audifonos</Link>
    </nav>
    </>  

    
    )
}

export default MenuList 