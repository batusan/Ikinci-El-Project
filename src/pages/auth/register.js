import { useRouter } from "next/router";
import { useEffect } from "react";
import Logo from "@/assets/Icons/Logo";
import ImagePanel from "@/components/Auth/ImagePanel";
import RegisterForm from "@/components/Auth/RegisterForm";
import { useUserContext } from "@/contexts/UserContext";
import { getAuth } from "@/services/AuthService";

import styles from "@/styles/Sign.module.css";
import Head from "next/head";

export default function Register(props) {
  const router = useRouter();
  const { setUserDetail } = useUserContext();
  useEffect(() => {
    setUserDetail(props.isAuth);
  });

  const clickHandle = () => {
    router.push("/auth/login");
  };

  const clickLogo = () => {
    router.push("/");
  };

  return (
    <div className={styles.sign}>
      <Head>
        <title>Kayıt Ol | İkinci El Project</title>
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
          <span className={styles.registerText}>Üye Ol</span>
          <span className={styles.registerUnderText}>
            Fırsatlardan yararlanmak için üye ol!
          </span>
          <RegisterForm />
          <div className={styles.underText}>
            Hesabın var mı?{" "}
            <span className={styles.underTextColor} onClick={clickHandle}>
              Giriş Yap
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await getAuth(context.req.headers?.cookie);
  if (response) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }
  return {
    props: {},
  };
}
