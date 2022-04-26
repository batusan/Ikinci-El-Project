import { useRouter } from "next/router";
import ImagePanel from "../../components/Sign/ImagePanel";
import LoginForm from "../../components/Sign/LoginForm";

import styles from "../../styles/Sign.module.css";

function Login() {
  const router = useRouter();
  const clickHandle = () => {
    router.push("/auth/register");
  };
  return (
    <div className={styles.sign}>
      <ImagePanel />
      <div className={styles.rightSide}>
        <div className={styles.logo} />
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

export default Login;
