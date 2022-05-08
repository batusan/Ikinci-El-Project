import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userDetail, setUserDetail] = useState();
  const [myProducts, setMyProducts] = useState();
  const [myOffers, setMyOffers] = useState();

  return (
    <UserContext.Provider
      value={{
        userDetail,
        setUserDetail,
        myProducts,
        setMyProducts,
        myOffers,
        setMyOffers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
