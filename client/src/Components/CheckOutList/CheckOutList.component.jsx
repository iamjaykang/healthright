import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../App/Common/Button/Button.common";
import {
  selectCartItems,
  selectCartTotal,
} from "../../stores/cart/cart.selector";
import CheckOutItem from "../CheckOutItem/CheckOutItem.component";
import "./CheckOutList.css";

const CheckOutList = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-list">
      <h2>CART</h2>
      {cartItems.length === 0 ? (
        <div className="checkout-list-empty">Your Cart is Empty!</div>
      ) : (
        <>
          <table className="checkout-table-container">
            <thead>
              <tr className="row-block">
                <th className="header-block">Product</th>
                <th className="header-block">Quantity</th>
                <th className="header-block">Price</th>
                <th className="header-block">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map((item) => <CheckOutItem item={item} />)}
            </tbody>
          </table>
          <div className="total-container">
            <div className="total">
              <span className="text">Total:</span>
              <span className="value"> ${cartTotal}</span>
            </div>
          </div>
          <Link to="/checkout/payment">
            <Button>Check Out</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CheckOutList;
