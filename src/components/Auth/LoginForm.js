import cls from "classnames";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { LoginSchema } from "@/schemas/LoginSchema";
import utilStyles from "@/styles/utilities.module.css";
import signStyles from "@/styles/Sign.module.css";
import { Login } from "@/services/AuthService";
import useHandleError from "@/hooks/useHandleErrors";
import { useUserContext } from "@/contexts/UserContext";

import Input from "../Inputs/Input";
import Label from "../Inputs/Label";
import Button from "../Inputs/Button";
import useNotify from "@/hooks/useNotify";

export default function LoginForm() {
  const notify = useNotify;
  const { loading, setLoading } = useUserContext();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      setLoading(true);
      handleAsyncSubmit(values);
    },
  });

  const handleAsyncSubmit = async (values) => {
    await Login(values)
      .then((res) => {
        if (res) {
          setLoading(false);
          notify("SUCCESS", "Başarıyla giriş yapıldı.");
          router.push("/");
        }
      })
      .catch((err) => setLoading(false));
  };

  const HandleSubmit = async (e) => {
    useHandleError(e, formik);
  };

  return (
    <form
      id="registerForm"
      className={cls(utilStyles.flex, signStyles.form)}
      onSubmit={HandleSubmit}
    >
      <div className={signStyles.inputGroup}>
        <Label htmlFor="identifier" value="Email" />
        <Input
          height="45px"
          width="100%"
          type="email"
          name="identifier"
          id="identifier"
          placeholder="Email@example.com"
          onChange={formik.handleChange}
          value={formik.values.identifier}
        />
      </div>
      <div className={signStyles.inputGroup}>
        <Label htmlFor="password" value="Şifre" />
        <Input
          height="45px"
          width="100%"
          type="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div className={signStyles.forgotPassword}>Şifremi Unuttum</div>
      </div>
      <Button
        type="submit"
        id="registerButton"
        className={cls(signStyles.signButton)}
        value="Giriş"
        width="100%"
        height="45px"
        disabled={loading}
      />
    </form>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const data = "test";

  // Pass data to the page via props
  return { props: { data: data } };
}
