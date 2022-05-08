import { useEffect } from "react";
import AccountComponent from "@/components/Account/AccountComponent";
import Navbar from "@/components/Common/Navbar";
import { useUserContext } from "@/contexts/UserContext";
import { getAuth } from "@/services/AuthService";
import { getAccountProps } from "@/services/ProductService";
import Head from "next/head";

function Account(props) {
  const { setUserDetail, setMyProducts, setMyOffers } = useUserContext();
  useEffect(() => {
    setUserDetail(props.isAuth);
    setMyProducts(props.products);
    setMyOffers(props.offers);
  });

  return (
    <>
      <Head>
        <title>Hesabım | İkinci El Project</title>
        <meta name="description" content="İkinci el alışveriş sitem." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar isAuth={props.isAuth} />
      <AccountComponent auth={props.isAuth} />
    </>
  );
}

export async function getServerSideProps(context) {
  const isAuth = await getAuth(context.req.headers?.cookie);
  if (!isAuth) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  } else {
    const response = await getAccountProps(
      isAuth.id,
      context.req.headers?.cookie
    );
    return {
      props: {
        isAuth: isAuth,
        products: response.products,
        offers: response.offers,
      },
    };
  }
}

export default Account;
