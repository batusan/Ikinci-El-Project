import toast from "react-hot-toast";

import ErrorIcon from "@/assets/Icons/ErrorIcon";
import SuccessIcon from "@/assets/Icons/SuccessIcon";

const useNotify = (type, notifyMessage) => {
  switch (type) {
    case "SUCCESS":
      toast.success(<span>{notifyMessage}</span>, {
        icon: <SuccessIcon />,
      });
      break;
    case "ERROR":
      toast.error(<span>{notifyMessage}</span>, {
        icon: <ErrorIcon />,
        style: { justifyContent: "flex-start" },
      });
      break;
    default:
      toast(<span>{notifyMessage}</span>);
  }
};

export default useNotify;
