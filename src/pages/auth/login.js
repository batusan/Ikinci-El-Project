import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAuth } from "@/services/AuthService";
import { useUserContext } from "@/contexts/UserContext";
import ImagePanel from "@/components/Auth/ImagePanel";
import LoginForm from "@/components/Auth/LoginForm";
import Logo from "@/assets/Icons/Logo";
import styles from "@/styles/Sign.module.css";
import Head from "next/head";

export default function Login(props) {
  const { setUserDetail } = useUserContext();
  useEffect(() => {
    setUserDetail(props.isAuth);
  });

  const router = useRouter();

  const clickHandle = () => {
    router.push("/auth/register");
  };

  const clickLogo = () => {
    router.push(`/`);
  };

  return (
    <div className={styles.sign}>
      <Head>
        <title>Giriş Yap | İkinci El Project</title>
        <meta name="description" content="İkinci el alışveriş sitem." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ImagePanel />
      <div className={styles.rightSide}>
        <Logo
          width="224.49px"
          height="73.2px"
          class={styles.logo}
          onClick={clickLogo}
        />
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
