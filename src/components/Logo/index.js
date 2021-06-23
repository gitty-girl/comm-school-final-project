import { Link } from "react-router-dom";

import { LOGO_ROUTE_CONFIG } from "../../config/routes";

import styles from "./Logo.module.css";

const LOGO = require("../../assets/githublogo.png");

function Logo() {
  console.log(LOGO);
  return (
    <div>
      <Link to={LOGO_ROUTE_CONFIG.path}>
        <img src={LOGO.default} alt="Github Logo" className={styles.logo} />
      </Link>
    </div>
  );
}

export default Logo;
