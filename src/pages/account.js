import { useEffect } from "react";
import AccountComponent from "../components/Account/AccountComponent";
import Navbar from "../components/Common/Navbar";
import { useAuthContext } from "../contexts/AuthContext";
import { getAuth } from "../services/AuthService";

function Account(props) {
  const { setUserDetail } = useAuthContext();
  useEffect(() => {
    setUserDetail(props.isAuth);
  }, []);
  return (
    <>
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
  }
  return {
    props: { isAuth: isAuth },
  };
}

export default Account;
