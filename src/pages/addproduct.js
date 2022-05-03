import AddProduct from "../components/AddProduct/AddProduct";
import Navbar from "../components/Common/Navbar";
import { getAuth } from "../services/AuthService";

function account(props) {
  return (
    <>
      <Navbar isAuth={props.isAuth} />
      <AddProduct />
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

export default account;
