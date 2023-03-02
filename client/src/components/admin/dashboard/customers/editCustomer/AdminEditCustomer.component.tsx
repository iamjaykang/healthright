import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DashboardFormInput from "../../../../../app/common/dashboardForm/DashboardFormInput.common";
import Spinner from "../../../../../app/common/spinner/Spinner.common";
import {
  deleteCustomerLoading,
  fetchCustomerByIdLoading,
} from "../../../../../app/stores/customers/customer.action";
import {
  selectCustomer,
  selectCustomersIsLoading,
  selectCustomersSuccess,
} from "../../../../../app/stores/customers/customer.selector";

const initialFormData = {
  emailAddress: "",
  firstName: "",
  lastName: "",
  isDefault: false,
  unitNumber: "",
  streetNumber: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  region: "",
  postalCode: "",
  countryName: "",
};

type RouteParams = {
  customerId: string;
};

const AdminEditCustomer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customerId } = useParams<RouteParams>();
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const customerActionSuccess = useSelector(selectCustomersSuccess);

  const customerData = useSelector(selectCustomer);
  const customerIsLoading = useSelector(selectCustomersIsLoading);

  useEffect(() => {
    if (customerData && customerData.userAddresses) {
      setFormData({
        emailAddress: customerData.emailAddress ?? "",
        firstName: customerData.firstName ?? "",
        lastName: customerData.lastName ?? "",
        isDefault: customerData.userAddresses[0]?.isDefault ?? "",
        unitNumber: customerData.userAddresses[0]?.address.unitNumber ?? "",
        streetNumber: customerData.userAddresses[0]?.address.streetNumber ?? "",
        addressLine1: customerData.userAddresses[0]?.address.addressLine1 ?? "",
        addressLine2: customerData.userAddresses[0]?.address.addressLine2 ?? "",
        city: customerData.userAddresses[0]?.address.city ?? "",
        region: customerData.userAddresses[0]?.address.region ?? "",
        postalCode: customerData.userAddresses[0]?.address.postalCode ?? "",
        countryName:
          customerData.userAddresses[0]?.address.country.countryName ?? "",
      });
    }
  }, [customerData]);

  const {
    emailAddress,
    firstName,
    lastName,
    isDefault,
    unitNumber,
    streetNumber,
    addressLine1,
    addressLine2,
    city,
    region,
    postalCode,
    countryName,
  } = formData;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsFormChanged(true);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsFormChanged(true);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
    setIsFormChanged(true);
  };

  const handleReset = () => {
    if (customerId) {
      const id = parseInt(customerId, 10);
      dispatch(fetchCustomerByIdLoading(id));
      setIsFormChanged(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setFormData(initialFormData);
    } catch (error) {
      throw error;
    }
  };

  const handleDelete = () => {
    try {
      if (customerId) {
        const id = parseInt(customerId, 10);
        dispatch(deleteCustomerLoading(id));
        if (customerActionSuccess) {
          navigate("/admin/dashboard/customers");
        }
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (customerId) {
      const id = parseInt(customerId, 10);
      dispatch(fetchCustomerByIdLoading(id));
    }
  }, [dispatch, customerId]);

  if (customerIsLoading) {
    return <Spinner />;
  }

  return (
    <div className="dashboard__page">
      <div className="dashboard__page-header">
        <h2 className="dashboard__page-title">Edit Customer</h2>
        <div className="dashboard__btn-container">
          <button onClick={handleDelete} className="dashboard__btn shadow-sm">
            Delete
          </button>
        </div>
      </div>
      <form className="dashboard__form--customer" onSubmit={handleSubmit}>
        <div className="dashboard__form-container--customer-left">
          <div className="dashboard__card--customer shadow-sm">
              <DashboardFormInput
                label="Email Address"
                type="email"
                required
                onChange={handleInputChange}
                name="emailAddress"
                value={emailAddress}
              />
            <div className="dashboard__input-group-container--name">
              <DashboardFormInput
                label="First Name"
                type="text"
                required
                onChange={handleInputChange}
                name="firstName"
                value={firstName}
              />
              <DashboardFormInput
                label="Last Name"
                type="text"
                required
                onChange={handleInputChange}
                name="lastName"
                value={lastName}
              />
            </div>
          </div>
          <div className="dashboard__card--customer shadow-sm">
            <div className="dashboard__input-group-container--house-number">
              <DashboardFormInput
                label="Unit Number"
                type="number"
                onChange={handleInputChange}
                name="unitNumber"
                value={unitNumber}
              />
              <DashboardFormInput
                label="Street Number"
                type="number"
                required
                onChange={handleInputChange}
                name="streetNumber"
                value={streetNumber}
              />
            </div>
            <div className="dashboard__input-group-container--address-line">
              <DashboardFormInput
                label="Address Line1"
                type="text"
                required
                onChange={handleInputChange}
                name="addressLine1"
                value={addressLine1}
              />
              <DashboardFormInput
                label="Address Line2"
                type="text"
                required
                onChange={handleInputChange}
                name="addressLine2"
                value={addressLine2}
              />
            </div>
            <div className="dashboard__input-group-container--default">
              <label className="dashboard__input-label" htmlFor="isDefault">
                Is This Your Main Address?
              </label>
              <input
                className="dashboard__input--default"
                type="checkbox"
                checked={isDefault}
                name="isDefault"
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
        </div>
        <div className="dashboard__form-container--customer-right">
          <div className="dashboard__card--customer shadow-sm">
            {/* TODO: Refactor code to use country Id and implement changes accoringly */}
            <div className="dashboard__input-group">
              <span className="dashboard__customer-label">Country</span>
              <div className="dashboard__customer-card--country-options">
                <select
                  name="countryName"
                  value={countryName}
                  onChange={handleSelectChange}
                >
                  <option value="">-- Select a Country --</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
              </div>
            </div>
            <DashboardFormInput
              label="City"
              type="text"
              required
              onChange={handleInputChange}
              name="city"
              value={city}
            />
            <DashboardFormInput
              label="Region"
              type="text"
              required
              onChange={handleInputChange}
              name="region"
              value={region}
            />
            <DashboardFormInput
              label="Postal Code"
              type="text"
              required
              onChange={handleInputChange}
              name="postalCode"
              value={postalCode}
            />
          </div>
        </div>
        <div className="dashboard__btns-container">
          <button
            className="dashboard__btn--discard shadow-sm"
            type="button"
            disabled={!isFormChanged}
            onClick={handleReset}
          >
            Discard
          </button>
          <button
            className="dashboard__btn shadow-sm"
            type="submit"
            disabled={!isFormChanged}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminEditCustomer;
