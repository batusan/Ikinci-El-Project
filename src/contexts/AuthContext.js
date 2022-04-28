import { createContext, useContext, useState } from "react";
import cookie from "js-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    token: "",
  });

  const setUserAuthInfo = ({ data }) => {
    const token = localStorage.setItem("token", data.data);
    setAuthState({
      token,
    });
  };

  const isUserAuthenticated = () => {
    if (cookie.get("Auth_Token")) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isUserAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
