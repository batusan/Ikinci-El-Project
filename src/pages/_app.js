import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "toast",

          error: {
            duration: 3000,
            theme: {
              primary: "red",
              secondary: "black",
            },
            style: {
              width: "355px",
              height: "60px",
              padding: "16px",
              color: "#F77474",
              background: "#FFE5E5 0% 0% no-repeat padding-box",
              font: "normal normal normal 16px/23px Nunito",
              letterSpacing: "0px",
              borderRadius: "8px",
              textAlign: "left",
            },
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
            style: {
              width: "355px",
              height: "60px",
              padding: "16px",
              color: "#46AF32",
              background: "#F1FFF0 0% 0% no-repeat padding-box",
              font: "normal normal normal 16px/23px Nunito",
              letterSpacing: "0px",
              borderRadius: "8px",
            },
          },
        }}
      />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
