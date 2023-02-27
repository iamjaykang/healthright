import React,{ memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIsCartOpen } from "../../../../stores/cart/cart.action";
import { selectCartItems } from "../../../../stores/cart/cart.selector";
import { selectProductsArray } from "../../../../stores/products/product.selector";
import getRandomProducts from "../../../../utils/randomProducts/getRandomProducts.utils";

const CartFrequentlyBought = () => {
  const productsArray = useSelector(selectProductsArray);

  const dispatch = useDispatch()

  const cartItems = useSelector(selectCartItems);

  const randomProducts = getRandomProducts(productsArray, 4, cartItems);

  const handleProductClick = () => {
      dispatch(setIsCartOpen(false));
  };

  return (
    <div className="frequently-bought-container">
      <h2>Frequently Bought Together</h2>
      <ul>
        {randomProducts.map((product) => (
          <li key={product.id} className="frequently-bought-product shadow-sm">
            <Link to={`product/${product.name}`} onClick={handleProductClick}>
              <img src={product.productImage} alt={product.name} />
              <h3>{product.name}</h3>
            </Link>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(CartFrequentlyBought);
