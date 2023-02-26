export interface Product {
  id: number;
  name: string;
  description: string;
  vendor: { vendorName: string; id: number } | string;
  category: { categoryName: string; id: number } | string;
  price: number;
  productImage: string;
  productLive: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface AdminProduct extends Product {
  cost: number;
  qtyInStock: number;
  vendor: { vendorName: string; id: number };
  category: { categoryName: string; id: number };
}

export interface CartItemData {
  id?: number;
  name: string;
  price: number;
  productImage: string;
  quantity: number;
}
export class ProductFormValues {
  id?: number = 0;
  name: string = "";
  description: string = "";
  vendorName: string = "";
  categoryName: string = "";
  price: number = 0;
  productImage: string = "";
  productLive: number = 0;
  createdAt?: Date | string = "";
  updatedAt?: Date | string = "";

  constructor(product?: ProductFormValues) {
    if (product) {
      this.id = product.id;
      this.name = product.name;
      this.description = product.description;
      this.vendorName = product.vendorName;
      this.categoryName = product.categoryName;
      this.price = product.price;
      this.productImage = product.productImage;
      this.productLive = product.productLive;
      this.createdAt = product.createdAt;
      this.updatedAt = product.updatedAt;
    }
  }
}

export class AdminProductFormValues extends ProductFormValues {
  cost: number = 0;
  qtyInStock: number = 0;

  constructor(product?: AdminProductFormValues) {
    super(product);
    if (product) {
      this.cost = product.cost;
      this.qtyInStock = product.qtyInStock;
    }
  }
}

export interface VendorMap {
  [key: string]: Product[];
}
