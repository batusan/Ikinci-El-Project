import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  identifier: yup
    .string()
    .email("Lütfen geçerli bir eposta adresi giriniz.")
    .required("Eposta alanı zorunludur."),
  password: yup
    .string()
    .typeError("Her karakteri kullanamazsın.")
    .min(8, "Şifreniz 8 karakterden az olamaz.")
    .max(20, "Şifreniz 20 karakterden fazla olamaz.")
    .required("Şifre alanı zorunludur."),
});
