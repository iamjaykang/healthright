import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { CustomerResponse, CustomersResponse, PaymentResponse, ProductResponse, ProductsResponse } from "../models/apiResponses.model";
import { AdminProductFormValues, CartItemData } from "../models/product.model";
import { CustomerFormValues } from "../models/user.model";
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

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

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
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Products = {
  list: () => requests.get<ProductsResponse>("/products"),
  searchByTerm: (searchTerm: string) =>
    requests.get<ProductsResponse>(`/products/search?q=${searchTerm}`),
  listForAdmin: () => requests.get<ProductsResponse>("/products/admin"),
  listFilteredByVendor: (vendor: string) => requests.get<ProductsResponse>(`/products/vendor/${vendor}`),
  detailsByName: (productName: string) => requests.get<ProductResponse>(`/products/${productName}`),
  detailsForAdmin: (productId: number) => requests.get<ProductResponse>(`/products/admin/${productId}`),
  create: (productFormData: AdminProductFormValues) => requests.post<ProductResponse>("/products", productFormData),
  update: (productId: number, newProductFormData: AdminProductFormValues) =>
    requests.put<ProductResponse>(`/products/${productId}`, newProductFormData),
  delete: (productId: number) => requests.del<ProductResponse>(`/products/${productId}`),
};

const Users = {
  list: () => requests.get<CustomersResponse>("/users"),
  details: (customerId: number) => requests.get<CustomerResponse>(`/users/${customerId}`),
  create: (userFormData: CustomerFormValues) => requests.post<CustomerResponse>("/users", userFormData),
  update: (customerId: number, newCustomerFormData: CustomerFormValues) =>
    requests.put<CustomerResponse>(`/users/${customerId}`, newCustomerFormData),
  delete: (customerId: number) => requests.del<CustomerResponse>(`/users/${customerId}`),
};

const Payments = {
  create: (cartItems: CartItemData[]) =>
    requests.post<PaymentResponse>("/payment/create-payment-intent", cartItems),
};

const agent = {
  Products,
  Users,
  Payments,
};

export default agent;
