import axios, { URL } from "../Constants/axios";
import cookie from "js-cookie";
import useNotify from "../hooks/useNotify";

const ERRORS = {
  "Auth.form.error.email.taken": "Email adresi",
};

const notify = useNotify;

export const Login = async (formdata) => {
  try {
    const response = await axios.post(URL.login, formdata);
    if (response.status === 200) {
      cookie.set("Auth_Token", response.data.jwt);
      return true;
    } else {
      notify("ERROR", error.response.data?.message[0].messages[0].message);
      return false;
    }
  } catch (error) {
    notify("ERROR", error.response.data?.message[0].messages[0].message);
    return false;
  }
};

export const Register = async (formdata) => {
  try {
    const response = await axios.post(URL.register, formdata);

    if (response.status === 200) {
      cookie.set("Auth_Token", response.data.jwt);
      return true;
    } else {
      notify("ERROR", error.response.data?.message[0].messages[0].message);
      return false;
    }
  } catch (error) {
    notify("ERROR", error.response.data?.message[0].messages[0].message);
    return false;
  }
};
