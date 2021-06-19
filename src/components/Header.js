import { NavLink } from "react-router-dom";

import ROUTES from "../config/routes";
import Logo from "./Logo";
import Button from "./Button";

function Header() {
  const { DASHBOARD, SEARCH, FAVORITES } = ROUTES;

  return (
    <header>
      <Logo />

      <nav>
        <ul>
          <li>
            <NavLink to={DASHBOARD} activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={SEARCH} activeClassName="active">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to={FAVORITES} activeClassName="active">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>

      <Button />
    </header>
  );
}

export default Header;
