import axios, { URL } from "../constants/axios";
import cookie from "js-cookie";
import { parseCookie } from "../utils/cookieParser";
import useNotify from "../hooks/useNotify";

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

export const getAuth = async (cookie) => {
  try {
    if (cookie) {
      const token = parseCookie(cookie);
      const response = await axios.get(URL.isAuth, {
        headers: { Authorization: `Bearer ${token.Auth_Token}` },
      });
      return response.status == 200 ? true : false;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
