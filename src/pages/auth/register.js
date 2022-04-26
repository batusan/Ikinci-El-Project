import { useRouter } from "next/router";
import ImagePanel from "../../components/Sign/ImagePanel";
import RegisterForm from "../../components/Sign/RegisterForm";

import styles from "../../styles/Sign.module.css";

function Register() {
  const router = useRouter();
  const clickHandle = () => {
    router.push("/auth/login");
  };
  return (
    <div className={styles.sign}>
      <ImagePanel />
      <div className={styles.rightSide}>
        <div className={styles.logo} />
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

export default Register;
