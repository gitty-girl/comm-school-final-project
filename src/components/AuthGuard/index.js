import { Redirect } from "react-router";

import { useAuth } from "../../context/AuthContext";

import { ROUTES } from "../../constants/routes";

function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuth();

  if (!isInitialized) {
    return null;
  }

  if (!isAuthenticated) {
    return <Redirect to={ROUTES.SiGN_IN} />;
  }

  return <>{children} </>;
}

export default AuthGuard;
