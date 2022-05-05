import * as yup from "yup";

export const ProductSchema = yup.object().shape({
  name: yup.string().required("İsim alanı zorunludur."),
  description: yup.string().required("Açıklama alanı zorunludur."),
  category: yup.string().required("Kategori alanı zorunludur."),
  brand: yup.string().required("Marka alanı zorunludur."),
  status: yup.string().required("Kullanım durumu alanı zorunludur."),
  color: yup.string().required("Renk alanı zorunludur."),
  price: yup.number().typeError('Fiyat alanı zorunludur.').required("Fiyat alanı zorunludur."),
});
