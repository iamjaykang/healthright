import { Address, Customer } from "./user.model";

export interface Order {
    id: number;
    orderTotal: string;
    createdAt: Date;
    updatedAt: Date;
    user: Customer;
    shippingAddress: Address;
    orderStatus: OrderStatus;
    shippingMethod: ShippingMethod;
    orderLines: OrderLine[];
  }
  
  export interface OrderStatus {
    id: number;
    status: string;
  }
  
  export interface OrderLine {
    id: number;
    qty: number;
    price: string;
    orderItemId: number;
    orderItem: OrderItem;
  }
  
  export interface OrderItem {
    id: number;
    name: string;
  }
  
  export interface ShippingMethod {
    id: number;
    name: string;
    price: string;
  }

  export class OrderFormValues {
    id?: number = 0;
    emailAddress: string = "";
    firstName: string = "";
    lastName: string = "";
    unitNumber: string | null = null;
    streetNumber: string = "";
    addressLine1: string = "";
    addressLine2: string | null = null;
    city: string = "";
    region: string = "";
    postalCode: string = "";
    countryId?: number = 0;
    shippingMethodId?: number = 0;
    orderStatusId?: number = 0;
    orderLines: OrderLineFormValues[] = [];
  
    constructor(order?: OrderFormValues) {
      if (order) {
        this.id = order.id;
        this.emailAddress = order.emailAddress;
        this.firstName = order.firstName;
        this.lastName = order.lastName;
        this.unitNumber = order.unitNumber;
        this.streetNumber = order.streetNumber;
        this.addressLine1 = order.addressLine1;
        this.addressLine2 = order.addressLine2;
        this.city = order.city;
        this.region = order.region;
        this.postalCode = order.postalCode;
        this.countryId = order.countryId;
        this.shippingMethodId = order.shippingMethodId;
        this.orderStatusId = order.orderStatusId;
        this.orderLines = order.orderLines?.map(
          (orderLine) => new OrderLineFormValues(orderLine)
        );
      }
    }
  }
  
  export class OrderLineFormValues {
    id?: number = 0;
    productItemId: number = 0;
    qty: number = 0;
  
    constructor(orderLine?: OrderLineFormValues) {
      if (orderLine) {
        this.id = orderLine.id;
        this.productItemId = orderLine.productItemId;
        this.qty = orderLine.qty;
      }
    }
  }


  