import { useEffect } from "react";
import AddProductComponent from "../components/AddProduct/AddProduct";
import Navbar from "../components/Common/Navbar";
import { useAuthContext } from "../contexts/AuthContext";
import { getAuth } from "../services/AuthService";

function AddProduct(props) {
  const { setUserDetail } = useAuthContext();
  useEffect(() => {
    setUserDetail(props.isAuth);
  }, []);
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
  console.log(isAuth)
  return {
    props: { isAuth: isAuth },
  };
}

export default AddProduct;
