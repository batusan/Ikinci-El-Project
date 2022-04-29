import { useRouter } from "next/router";
import Logo from "../../assets/Icons/Logo";
import ImagePanel from "../../components/Sign/ImagePanel";
import RegisterForm from "../../components/Sign/RegisterForm";
import { getAuth } from "../../services/AuthService";

import styles from "../../styles/Sign.module.css";

export default function Register() {
  const router = useRouter();
  const clickHandle = () => {
    router.push("/auth/login");
  };
  return (
    <div className={styles.sign}>
      <ImagePanel />
      <div className={styles.rightSide}>
        <Logo width="224.49px" height="73.2px" class={styles.logo} />
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
