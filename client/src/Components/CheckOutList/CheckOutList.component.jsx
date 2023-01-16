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
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems &&
        cartItems.map((item) => <CheckOutItem key={item.id} item={item} />)}
      <span className="total">Total: ${cartTotal}</span>
      <Link to='/check-out/payment'>
        <Button>Check Out</Button>
      </Link>
    </div>
  );
};

export default CheckOutList;
