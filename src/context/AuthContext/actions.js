import ACTIONS from "./constants";

function authInitialized(isAuthenticated, user) {
  return {
    type: ACTIONS.AUTH_INITIALIZED,
    payload: {
      isAuthenticated,
      user,
    },
  };
}

function authLogin(user) {
  return {
    type: ACTIONS.AUTH_LOGIN,
    payload: {
      user,
    },
  };
}

function authLogout() {
  return {
    type: ACTIONS.AUTH_LOGOUT,
  };
}

function authError(error) {
  return {
    type: ACTIONS.AUTH_ERROR,
    payload: {
      error,
    },
  };
}

export { authLogin, authLogout, authInitialized, authError };
