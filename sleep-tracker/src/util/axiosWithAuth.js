import axios from "axios";

export const axiosWithAuth = () => {
  const instance = axios.create({
    baseURL: "https://sleeptrackerbw.herokuapp.com/api",
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
  // Reshape the response to avoid res.data.data
  instance.interceptors.response.use((response) => {
    const body = { ...response.data };
    delete response.data; // remove the data property
    return { ...response, body };
  });
  return instance;
};
