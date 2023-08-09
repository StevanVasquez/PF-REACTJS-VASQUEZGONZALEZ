import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import MenuList from './MenuList'
import './Menu.scss'

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleOpen = () => {
        setShowMenu(true)
    }

    const handleClose = () => {
        setShowMenu(false)
    }

    return (
        <div className={showMenu ? "menu-active" : ""}>
            <div>
                <AiOutlineMenu onClick={handleOpen} className='menu_menulist'/>
            </div>

            <div className="menu__backdrop" onClick={handleClose}>
                <MenuList close={handleClose}/>
            </div>
        </div>
    )
}

export default Menu