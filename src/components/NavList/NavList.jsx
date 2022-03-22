import { NavLink } from "react-router-dom";

export const NavList = () => {
  return (
    <ul className="navList_ul">
      <NavLink to="Fawkes">
        <li className="navList_li">Inicio</li>
      </NavLink>
      <li className="navList_li">
        Catálogo
        <ul>
          <NavLink to="/catalogo/filtros">
            <li className="navList_li">Filtros</li>
          </NavLink>
          <NavLink to="/catalogo/inyeccion">
            <li className="navList_li">Inyeccion</li>
          </NavLink>
          <NavLink to="/catalogo/llantas">
            <li className="navList_li">Llantas</li>
          </NavLink>
        </ul>
      </li>
      <NavLink to="Contacto">
        <li className="navList_li">Contacto</li>
      </NavLink>
    </ul>
  );
};
