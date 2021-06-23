import { createContext, useEffect, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

import { signInUser } from "../../api/auth";

import { toggleSession, parseToken } from "../../utils/jwt";
import { authLogin, authLogout, authError } from "./actions";
import { initializeAuthEffect } from "./effect";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function login(username, password) {
    const response = await signInUser(username, password);
    const { token, message } = response;

    if (message && !token) {
      dispatch(authError(message));
      return;
    }

    toggleSession(token);

    const { payload } = parseToken(token);

    dispatch(authLogin(payload));
  }

  function logout() {
    toggleSession(null);
    dispatch(authLogout());
  }

  useEffect(() => {
    initializeAuthEffect(dispatch);
  }, []);

  if (!state.isInitialized) {
    return <div>Loading</div>;
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error();
  }

  return context;
}

export { AuthContextProvider, useAuth };
