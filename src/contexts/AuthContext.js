import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userDetail, setUserDetail] = useState();

  return (
    <AuthContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
