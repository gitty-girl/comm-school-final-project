import { Link } from "react-router-dom";

import ROUTES from "../config/routes";

function Logo() {
  const { DASHBOARD } = ROUTES;

  return (
    <div>
      <Link to={DASHBOARD}>
        <h1>Logo here</h1>
      </Link>
    </div>
  );
}

export default Logo;
