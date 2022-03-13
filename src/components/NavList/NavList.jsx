import { NavLink } from "react-router-dom"

export const NavList = () => {
    return (
        <ul className='navList_ul'>
            <NavLink to='Fawkes'><li className='navList_li'>Inicio</li></NavLink>
            <NavLink to='Fawkes'><li className='navList_li'>Catálogo</li></NavLink>
            <NavLink to='Fawkes'><li className='navList_li'>Contacto</li></NavLink>
        </ul>
    )
}