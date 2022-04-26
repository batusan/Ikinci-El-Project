import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [accountName, setAccountName] = useState("unknown");

  return (
    <AppContext.Provider value={{ accountName, setAccountName }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
