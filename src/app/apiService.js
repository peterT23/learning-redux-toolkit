import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:5000",
});

apiService.interceptors.request.use(
  (request) => {
    console.log("request", request);
    return request;
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);
apiService.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response;
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);

export default apiService;
