import cookie from "js-cookie";
import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState();
  const [myProducts, setMyProducts] = useState();
  const [myOffers, setMyOffers] = useState();

  const logOut = () => {
    setUserDetail();
    setMyProducts();
    setMyOffers();
    cookie.remove("Auth_Token");
    router.push("/");
  };

  return (
    <UserContext.Provider
      value={{
        logOut,
        loading,
        setLoading,
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
