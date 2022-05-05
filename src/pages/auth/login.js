import { useRouter } from "next/router";
import ImagePanel from "../../components/Auth/ImagePanel";
import LoginForm from "../../components/Auth/LoginForm";
import Logo from "../../assets/Icons/Logo";
import styles from "../../styles/Sign.module.css";

import { getAuth } from "../../services/AuthService";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";

export default function Login({ isProtected }) {
  const { setUserDetail } = useAuthContext();
  useEffect(() => {
    setUserDetail(props.isAuth);
  }, []);

  const router = useRouter();

  const clickHandle = () => {
    router.push("/auth/register");
  };

  return (
    <div className={styles.sign}>
      <ImagePanel />
      <div className={styles.rightSide}>
        <Logo width="224.49px" height="73.2px" class={styles.logo} />
        <div className={styles.registerFormWrapper}>
          <span className={styles.registerText}>Giriş Yap</span>
          <span className={styles.registerUnderText}>
            Fırsatlardan yararlanmak için giriş yap!
          </span>
          <LoginForm />
          <div className={styles.underText}>
            Hesabın yok mu?{" "}
            <span className={styles.underTextColor} onClick={clickHandle}>
              Kayıt ol
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const auth = await getAuth(context.req.headers?.cookie);
  if (auth) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }
  return {
    props: { auth: auth },
  };
}
