import { useEffect } from "react";
import AddProductComponent from "../components/AddProduct/AddProduct";
import Navbar from "../components/Common/Navbar";
import { useUserContext } from "../contexts/UserContext";
import { getAuth } from "../services/AuthService";

function AddProduct(props) {
  const { setUserDetail } = useUserContext();
  useEffect(() => {
    setUserDetail(props.isAuth);
  });
  return (
    <>
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
