import axios from "axios";

export const testRequest = async (formdata) => {
  try {
    const response = await axios.post(
      "https://eoa5k2uj7hxm0rd.m.pipedream.net",
      formdata
    );

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
