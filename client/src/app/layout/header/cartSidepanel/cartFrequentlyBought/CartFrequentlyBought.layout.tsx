import React,{ memo } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../../stores/cart/cart.selector";
import { selectProductsArray } from "../../../../stores/products/product.selector";
import getRandomProducts from "../../../../utils/randomProducts/getRandomProducts.utils";

const CartFrequentlyBought = () => {
  const productsArray = useSelector(selectProductsArray);

  const cartItems = useSelector(selectCartItems);

  const randomProducts = getRandomProducts(productsArray, 4, cartItems);

  return (
    <div className="frequently-bought-container">
      <h2>Frequently Bought Together</h2>
      <ul>
        {randomProducts.map((product) => (
          <li key={product.id} className="frequently-bought-product shadow-sm">
            <a href={`product/${product.name}`}>
              <img src={product.productImage} alt={product.name} />
              <h3>{product.name}</h3>
            </a>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(CartFrequentlyBought);
