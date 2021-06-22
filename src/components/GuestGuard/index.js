import { Redirect } from "react-router";

import { useAuth } from "../../context/AuthContext";

import { ROUTES } from "../../constants/routes";

function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return <>{children} </>;
}

export default GuestGuard;
