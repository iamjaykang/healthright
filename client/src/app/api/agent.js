import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const Products = {
  list: () => requests.get("/products"),
  details: (id) => requests.get(`/products/${id}`),
  create: (productData) => requests.post("/products", productData),
  update: (id, newProductData) => requests.put(`/products/${id}`, newProductData),
  delete: (id) => requests.del(`/products/${id}`),
};

const agent = {
  Products,
};

export default agent;
