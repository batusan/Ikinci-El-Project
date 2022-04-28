import { useRouter } from "next/router";
import { useEffect } from "react";
import ImagePanel from "../../components/Sign/ImagePanel";
import LoginForm from "../../components/Sign/LoginForm";
import Logo from "../../assets/Icons/Logo";
import styles from "../../styles/Sign.module.css";

import { useAuthContext } from "../../contexts/AuthContext";

export default function Login({ isProtected }) {
  const router = useRouter();
  const { isUserAuthenticated } = useAuthContext();

  useEffect(() => {
    console.log(isUserAuthenticated());
  }, []);

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
