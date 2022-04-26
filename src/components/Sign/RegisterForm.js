import cls from "classnames";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { RegisterSchema } from "../../schemas/RegisterSchema";

import utilStyles from "../../styles/utilities.module.css";
import signStyles from "../../styles/Sign.module.css";

import Input from "../Inputs/Input";
import Label from "../Inputs/Label";
import Button from "../Inputs/Button";

import { Register } from "../../services/AuthService";
import useHandleError from "../../hooks/useHandleErrors";

export default function RegisterForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      values = { ...values, username: values.email };
      handleAsyncSubmit(values);
    },
  });

  const handleAsyncSubmit = async (values) => {
    await Register(values).then((res) => {
      if (res) router.push("/");
    });
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
        <Label htmlFor="email" value="Email" />
        <Input
          height="45px"
          width="100%"
          type="email"
          name="email"
          id="email"
          placeholder="Email@example.com"
          onChange={formik.handleChange}
          value={formik.values.email}
          onError={
            formik.errors.email && formik.touched.email ? true : undefined
          }
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
          onError={
            formik.errors.password && formik.touched.password ? true : undefined
          }
        />
      </div>
      <Button
        type="submit"
        id="registerButton"
        className={cls(signStyles.signButton)}
        value="Üye ol"
        width="100%"
        height="45px"
      />
    </form>
  );
}
