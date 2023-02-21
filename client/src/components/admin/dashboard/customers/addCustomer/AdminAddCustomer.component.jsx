import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import DashboardFormTextInput from "../../../../../app/common/dashboardForm/DashboardFormTextInput.common";
import { addCustomerLoading } from "../../../../../app/stores/customers/customer.action";

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

const AdminAddCustomer = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormData);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(addCustomerLoading(formData));
      setFormData(initialFormData);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="dashboard__page">
      <h2 className="dashboard__content-title">Add Customer</h2>
      <form className="dashboard__customer-form" onSubmit={handleSubmit}>
        <div className="dashboard__customer-form--left">
          <div className="dashboard__customer-card shadow-sm">
            <div className="dashboard__customer-card--email">
              <DashboardFormTextInput
                label="Email Address"
                type="email"
                required
                onChange={handleInputChange}
                name="emailAddress"
                value={emailAddress}
              />
            </div>
            <div className="dashboard__input-group--name">
              <DashboardFormTextInput
                label="First Name"
                type="text"
                required
                onChange={handleInputChange}
                name="firstName"
                value={firstName}
              />
              <DashboardFormTextInput
                label="Last Name"
                type="text"
                required
                onChange={handleInputChange}
                name="lastName"
                value={lastName}
              />
            </div>
          </div>
          <div className="dashboard__customer-card shadow-sm">
            <div className="dashboard__input-group--house-number">
              <DashboardFormTextInput
                label="Unit Number"
                type="number"
                onChange={handleInputChange}
                name="unitNumber"
                value={unitNumber}
              />
              <DashboardFormTextInput
                label="Street Number"
                type="number"
                required
                onChange={handleInputChange}
                name="streetNumber"
                value={streetNumber}
              />
            </div>
            <div className="dashboard__input--address-line">
              <DashboardFormTextInput
                label="Address Line1"
                type="text"
                required
                onChange={handleInputChange}
                name="addressLine1"
                value={addressLine1}
              />
              <DashboardFormTextInput
                label="Address Line2"
                type="text"
                required
                onChange={handleInputChange}
                name="addressLine2"
                value={addressLine2}
              />
            </div>
            <div className="dashboard__input-group default-group">
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
        <div className="dashboard__customer-form--right">
          <div className="dashboard__customer-card shadow-sm">
            <div className="dashboard__input-group">
              <span className="dashboard__customer-label">Country</span>
              <div className="dashboard__customer-card--country-options">
                <select
                  name="countryName"
                  value={countryName}
                  onChange={handleInputChange}
                >
                  <option value="">-- Select a Country --</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
              </div>
            </div>
            <DashboardFormTextInput
              label="City"
              type="text"
              required
              onChange={handleInputChange}
              name="city"
              value={city}
            />
            <DashboardFormTextInput
              label="Region"
              type="text"
              required
              onChange={handleInputChange}
              name="region"
              value={region}
            />
            <DashboardFormTextInput
              label="Postal Code"
              type="text"
              required
              onChange={handleInputChange}
              name="postalCode"
              value={postalCode}
            />
          </div>
        </div>
        <button className="dashboard__btn" type="submit">
          Save Customer
        </button>
      </form>
    </div>
  );
};

export default AdminAddCustomer;