import { Link } from "react-router-dom";

import { LOGO_ROUTE_CONFIG } from "../../config/routes";

function Logo() {
  return (
    <div>
      <Link to={LOGO_ROUTE_CONFIG.path}>
        {/* <img src={LOGO} alt="Github Logo" /> */}
        <h1>Logo here</h1>
      </Link>
    </div>
  );
}

export default Logo;
