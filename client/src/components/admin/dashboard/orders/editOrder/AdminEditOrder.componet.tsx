import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardFormInput from "../../../../../app/common/dashboardForm/DashboardFormInput.common";
import DashboardFormSelect from "../../../../../app/common/dashboardForm/DashboardFormSelect.common";
import { OrderFormValues } from "../../../../../app/models/order.model";
import { fetchOrderByIdLoading } from "../../../../../app/stores/orders/order.action";
import { selectOrder } from "../../../../../app/stores/orders/order.selector";

const initialFormData = new OrderFormValues();

type RouteParams = {
  orderId: string;
};

const AdminEditOrder = () => {
  const [formData, setFormData] = useState(initialFormData);

  const { orderId } = useParams<RouteParams>();

  const dispatch = useDispatch();

  const orderData = useSelector(selectOrder);

  const [isFormChanged, setIsFormChanged] = useState(false);

  const {
    emailAddress,
    firstName,
    lastName,
    unitNumber,
    streetNumber,
    addressLine1,
    addressLine2,
    city,
    region,
    postalCode,
    shippingMethodId,
    orderStatusId,
    countryId,
  } = formData;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsFormChanged(true);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const intValue = parseInt(value, 10);
    setFormData({ ...formData, [name]: intValue });
    setIsFormChanged(true);
  };

  const handleReset = () => {
    if (orderId) {
      const id = parseInt(orderId, 10);
      dispatch(fetchOrderByIdLoading(id));
      setIsFormChanged(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    if (orderData) {
      const newFormData: OrderFormValues = {
        emailAddress: orderData.user?.emailAddress ?? "",
        firstName: orderData.user?.firstName ?? "",
        lastName: orderData.user?.lastName ?? "",
        unitNumber: orderData.shippingAddress?.unitNumber ?? "",
        streetNumber: orderData.shippingAddress?.streetNumber ?? "",
        addressLine1: orderData.shippingAddress?.addressLine1 ?? "",
        addressLine2: orderData.shippingAddress?.addressLine2 ?? "",
        city: orderData.shippingAddress?.city ?? "",
        region: orderData.shippingAddress?.region ?? "",
        postalCode: orderData.shippingAddress?.postalCode ?? "",
        shippingMethodId: orderData.shippingMethod?.id ?? 0,
        orderStatusId: orderData.orderStatus?.id ?? 0,
        countryId: orderData.shippingAddress?.country?.id ?? 0,
        orderLines: [],
      };

      setFormData(newFormData);
    } else {
      setFormData(initialFormData);
    }
  }, [orderData]);

  useEffect(() => {
    if (orderId) {
      const id = parseInt(orderId, 10);
      dispatch(fetchOrderByIdLoading(id));
    }
  }, [dispatch, orderId]);

  return (
    <div className="dashboard__page">
      <div className="dashboard__page-header">
        <h2 className="dashboard__page-title">Edit Customer</h2>
        <div className="dashboard__btn-container">
          <button
            onClick={() => console.log("deleteAction")}
            className="dashboard__btn shadow-sm"
          >
            Delete
          </button>
        </div>
      </div>
      <form className="dashboard__form--order" onSubmit={handleSubmit}>
        <div className="dashboard__form-container--order-left">
          <div className="dashboard__card--order shadow-sm">
            <div className="dashboard__card--order--email">
              <DashboardFormInput
                label="Email Address"
                type="email"
                required
                onChange={handleInputChange}
                name="emailAddress"
                value={emailAddress}
              />
            </div>
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
          <div className="dashboard__card--order shadow-sm">
            <div className="dashboard__input-group-container--house-number">
              <DashboardFormInput
                label="Unit Number"
                type="text"
                onChange={handleInputChange}
                name="unitNumber"
                value={unitNumber ?? ""}
              />
              <DashboardFormInput
                label="Street Number"
                type="text"
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
                onChange={handleInputChange}
                name="addressLine2"
                value={addressLine2 ?? ""}
              />
            </div>
            <div className="dashboard__input-group-container--location">
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
        </div>
        <div className="dashboard__form-container--order-right">
          <div className="dashboard__card--order shadow-sm">
            <DashboardFormSelect
              label="Shipping Method"
              name="shippingMethodId"
              value={shippingMethodId}
              onChange={handleSelectChange}
              options={[
                { value: "1", label: "Ground Shipping" },
                { value: "2", label: "2-Day Shipping" },
                { value: "3", label: "Overnight Shipping" },
              ]}
            />
            <DashboardFormSelect
              label="Order Status"
              name="orderStatusId"
              value={orderStatusId}
              onChange={handleSelectChange}
              options={[
                { value: "1", label: "Pending" },
                { value: "2", label: "Processing" },
                { value: "3", label: "Shipped" },
                { value: "4", label: "Delivered" },
              ]}
            />
            <DashboardFormSelect
              label="Country"
              name="countryName"
              value={countryId}
              onChange={handleSelectChange}
              options={[
                { value: "1", label: "United States" },
                { value: "2", label: "Canada" },
                { value: "3", label: "United Kingdom" },
              ]}
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

export default AdminEditOrder;
