import { useEffect } from "react";
import DetailsComponent from "../../components/Common/Details";
import Navbar from "../../components/Common/Navbar";
import { useUserContext } from "../../contexts/UserContext";
import { getAuth } from "../../services/AuthService";
import { getProduct } from "../../services/ProductService";

export default function Details(props) {
  const { setUserDetail } = useUserContext();
  useEffect(() => {
    setUserDetail(props.isAuth);
  });
  return (
    <div>
      <Navbar isAuth={props.isAuth} />
      <DetailsComponent product={props.product} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const isAuth = await getAuth(context.req.headers?.cookie);
  const product = await getProduct(context.params.id);
  return {
    props: { isAuth: isAuth, product: product },
  };
}
