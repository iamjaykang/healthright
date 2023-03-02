import { Order } from "./order.model";
import { AdminProduct, Product } from "./product.model";
import { Customer } from "./user.model";

export interface ProductsResponse {
  data: Product[] | AdminProduct[];
  success: boolean;
  message: string;
}

export interface ProductResponse {
  data: Product | AdminProduct | null;
  success: boolean;
  message: string;
}

export interface CustomersResponse {
  data: Customer[];
  success: boolean;
  message: string;
}

export interface CustomerResponse {
  data: Customer | null;
  success: boolean;
  message: string;
}

export interface PaymentResponse {
  data: string;
  success: boolean;
  message: string;
}

export interface OrdersResponse {
  data: Order[];
  success: boolean;
  message: string;
}

export interface OrderResponse {
  data: Order;
  success: boolean;
  message: string;
}