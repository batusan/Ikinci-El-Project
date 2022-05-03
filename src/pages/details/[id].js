import Details from "../../components/Common/Details";
import Navbar from "../../components/Common/Navbar";
import { getAuth } from "../../services/AuthService";
import { getProduct } from "../../services/ProductService";

export default function details(props) {
  return (
    <div>
      <Navbar isAuth={props.isAuth} />
      <Details product={props.product} />
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
