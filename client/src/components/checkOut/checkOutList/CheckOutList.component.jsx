import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../../app/common/button/Button.common";
import {
  selectCartItems,
  selectCartTotal,
} from "../../../app/stores/cart/cart.selector";
import CheckOutItem from "../checkOutItem/CheckOutItem.component";

const CheckOutList = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="app__checkout-list">
      <h2>CART</h2>
      {cartItems.length === 0 ? (
        <div className="app__checkout-list-empty">Your Cart is Empty!</div>
      ) : (
        <>
          <div>
            {cartItems && cartItems.map((item) => <CheckOutItem key={item.id} item={item} />)}
          </div>
          <div className="app__checkout-total-container">
            <div className="app__checkout-total">
              <span className="app__checkout-total--text">Total:</span>
              <span className="app__checkout-total--value"> ${cartTotal}</span>
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
