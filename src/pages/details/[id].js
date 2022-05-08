import { useEffect } from "react";
import DetailsComponent from "@/components/Common/Details";
import Navbar from "@/components/Common/Navbar";
import { useUserContext } from "@/contexts/UserContext";
import { getAuth } from "@/services/AuthService";
import { getProduct } from "@/services/ProductService";
import styles from "@/styles/Common.module.css";
import cls from "classnames";
import { useRouter } from "next/router";

export default function Details(props) {
  const router = useRouter();
  const { setUserDetail } = useUserContext();
  useEffect(() => {
    setUserDetail(props.isAuth);
  });

  useEffect(() => {
    if (!props.product) {
      let pushTimer = setTimeout(function () {
        router.push(`/`);
      }, 2000);

      return () => clearTimeout(pushTimer);
    }
  });

  return (
    <div>
      <Navbar isAuth={props.isAuth} />
      {props.product ? (
        <DetailsComponent product={props.product} />
      ) : (
        <div className={cls("container", styles.notFound)}>
          Üzgünüm , Böyle bir ürün bulunamadı.
          <div className={styles.notFoundInnerText}>
            Anasayfaya yönlendiriliyorsunuz...
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const isAuth = await getAuth(context.req.headers?.cookie);
  const product = await getProduct(context.params.id);
  if (product) {
    return {
      props: { isAuth: isAuth, product: product },
    };
  } else {
    return {
      props: { isAuth: isAuth },
    };
  }
}
