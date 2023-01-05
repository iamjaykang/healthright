import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart";

const CheckOutList = () => {
  const { cartItems, updateItemQuantity, removeItem } = useContext(CartContext);

  const handleIncrementClick = (itemId) => {
    updateItemQuantity(itemId, "increment");
  };

  const handleDecrementClick = (itemId) => {
    updateItemQuantity(itemId, "decrement");
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems &&
            cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.imgUrl} alt={`${item.name}`} />
                </td>
                <td>
                  <span>{item.name}</span>
                </td>
                <td>
                  <button onClick={() => handleDecrementClick(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrementClick(item.id)}>
                    +
                  </button>
                </td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => removeItem(item.id)}>x</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckOutList;
