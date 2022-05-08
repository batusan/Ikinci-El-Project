import { useEffect } from "react";
import AddProductComponent from "@/components/AddProduct/AddProduct";
import Navbar from "@/components/Common/Navbar";
import { useUserContext } from "@/contexts/UserContext";
import { getAuth } from "@/services/AuthService";
import Head from "next/head";

function AddProduct(props) {
  const { setUserDetail } = useUserContext();
  useEffect(() => {
    setUserDetail(props.isAuth);
  });
  return (
    <>
      <Head>
        <title>Ürün ekle | İkinci El Project</title>
        <meta name="description" content="İkinci el alışveriş sitem." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar isAuth={props.isAuth} />
      <AddProductComponent />
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
  }
  return {
    props: { isAuth: isAuth },
  };
}

export default AddProduct;
