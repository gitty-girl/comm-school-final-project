import { NavLink } from "react-router-dom";

import { HEADER_ROUTES_CONFIG } from "../../config/routes";

import { Logo, Button } from "../index";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />

      <nav>
        <ul className={styles.list}>
          {HEADER_ROUTES_CONFIG.map((route) => (
            <li key={route.path} className={styles.listItem}>
              <NavLink
                to={route.path}
                activeClassName={styles.active}
                className={styles.link}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Button />
    </header>
  );
}

export default Header;
