import axios from "axios";
import { toast } from "react-toastify";
import { router } from "../routes/Routes";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status) {
      const { status } = error.response;
      switch (status) {
        case 400:
          toast.error("Bad Request");
          break;
        case 401:
          toast.error("Unauthorized");
          break;
        case 404:
          toast.error("Not Found");
          router.navigate("/not-found");
          break;
        case 500:
          toast.error("Server Error");
          break;
        default:
          toast.error("An unknown error occurred");
          break;
      }
    }
    return Promise.reject(error);
  }
);

const responseBody = (response) => response.data;

axios.interceptors.request.use((config) => {
  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith("idToken="));
  if (cookie && config.headers) {
    config.headers.authorization = `Bearer ${cookie.split("=")[1]}`;
  }
  return config;
});

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const Products = {
  list: () => requests.get("/products"),
  listForAdmin: () => requests.get("/products/admin"),
  listFilteredByVendor: (vendor) => requests.get(`/products/vendor/${vendor}`),
  details: (id) => requests.get(`/products/${id}`),
  create: (productData) => requests.post("/products", productData),
  update: (id, newProductData) =>
    requests.put(`/products/${id}`, newProductData),
  delete: (id) => requests.del(`/products/${id}`),
};

const Users = {
  list: () => requests.get("/users"),
  details: (id) => requests.get(`/users/${id}`),
  create: (userData) => requests.post("/users", userData),
  update: (id, newUserData) => requests.put(`/users/${id}`, newUserData),
  delete: (id) => requests.del(`/users/${id}`),
};

const Payments = {
  create: (paymentData) =>
    requests.post("/payment/create-payment-intent", paymentData),
};

const agent = {
  Products,
  Users,
  Payments,
};

export default agent;
