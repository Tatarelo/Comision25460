import { NavLink } from "react-router-dom"

export const ItemCart = () => {
    return (
        <NavLink to='Cart'>
            <img className='logoCarrito' src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="LogoCarrito" />
        </NavLink>
    )
}