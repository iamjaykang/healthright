export interface UserData {
  createdAt: Date;
  email: string;
  id: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

export interface AdditionalInformation {
  firstName?: string;
  lastName?: string;
  isAdmin?: boolean;
}

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  createdAt: Date;
  updatedAt: Date;
  userAddresses: UserAddress[];
}

export interface UserAddress {
  id: number;
  userId: number;
  addressId: number;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
  address: Address;
}

export interface Address {
  id: number;
  unitNumber: string | null;
  streetNumber: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  region: string;
  postalCode: string;
  countryId: number;
  createdAt: Date;
  updatedAt: Date;
  country: Country;
}

export interface Country {
  id: number;
  countryName: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserFormValues {
  id?: number = 0;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";

  constructor(user?: UserFormValues) {
    if (user) {
      this.id = user.id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.email = user.email;
      this.password = user.password;
    }
  }
}

export class CustomerFormValues {
  id?: number = 0;
  firstName: string = "";
  lastName: string = "";
  emailAddress: string = "";
  createdAt?: Date | string = "";
  updatedAt?: Date | string = "";
  userId?: number = 0;
  addressId?: number = 0;
  isDefault: boolean = false;
  unitNumber: string | null = null;
  streetNumber: string = "";
  addressLine1: string = "";
  addressLine2: string | null = null;
  city: string = "";
  region: string = "";
  postalCode: string = "";
  countryId?: number = 0;
  countryName: string = "";

  constructor(customer?: CustomerFormValues) {
    if (customer) {
      this.id = customer.id;
      this.firstName = customer.firstName;
      this.lastName = customer.lastName;
      this.emailAddress = customer.emailAddress;
      this.createdAt = customer.createdAt;
      this.updatedAt = customer.updatedAt;
      this.userId = customer.userId;
      this.addressId = customer.addressId;
      this.isDefault = customer.isDefault;
      this.unitNumber = customer.unitNumber;
      this.streetNumber = customer.streetNumber;
      this.addressLine1 = customer.addressLine1;
      this.addressLine2 = customer.addressLine2;
      this.city = customer.city;
      this.region = customer.region;
      this.postalCode = customer.postalCode;
      this.countryId = customer.countryId;
      this.countryName = customer.countryName;
    }
  }
}
