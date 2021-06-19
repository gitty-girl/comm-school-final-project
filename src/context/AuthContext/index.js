import { createContext, useEffect, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

import { signInUser } from "../../api/auth";

import { toggleSession, parseToken } from "../../utils/jwt";
import { authLogin } from "./actions";
import { initialezeAuthEffect } from "./effect";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function login(username, password) {
    const response = await signInUser(username, password);

    const { token } = response;

    toggleSession(token);

    const { payload } = parseToken(token);

    dispatch(authLogin(payload));
  }

  useEffect(() => {
    initialezeAuthEffect(dispatch);
  }, []);

  // if (!state.isInitialized) {
  //   return <div>Loading</div>;
  // }

  return (
    <AuthContext.Provider value={{ ...state, login }}>
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
