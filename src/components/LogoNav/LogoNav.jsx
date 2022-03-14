import { NavLink } from "react-router-dom";

export const LogoNav = () => {
  return (
    <NavLink to="Fawkes">
      <img
        className="logo"
        src="https://cdn-icons-png.flaticon.com/512/4632/4632965.png"
        alt="Logo"
      />
    </NavLink>
  );
};
