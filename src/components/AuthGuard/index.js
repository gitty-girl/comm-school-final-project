import { Redirect } from "react-router";

import { useAuth } from "../../context/AuthContext";

import { ROUTES } from "../../constants/routes";

function AuthGuard({ children }) {
  console.log(ROUTES);
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to={ROUTES.SiGN_IN} />;
  }

  return <>{children} </>;
}

export default AuthGuard;
