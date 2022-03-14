import { ItemCart } from "../ItemCart/ItemCart";
import { LogoNav } from "../LogoNav/LogoNav";
import { NavList } from "../NavList/NavList";
import { TitleNav } from "../TitleNav/TitleNav";

export const NavBar = () => {
  return (
    <header className="navBar">
      <div className="navBar_div">
        <LogoNav />
      </div>
      <TitleNav />
      <div className="navList">
        <NavList />
        <ItemCart />
      </div>
    </header>
  );
};
