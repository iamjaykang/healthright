import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../button/Button.common";
import { addItemToCart } from "../../stores/cart/cart.action";
import { selectCartItems } from "../../stores/cart/cart.selector";
import { Link } from "react-router-dom";
import { Product } from "../../models/product.model";

export interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, productImage } = product;

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="app__product-card-container">
      <Link to={`/product/${name}`} className="app__product-card-mask--img">
        <div className="app__card-img-container">
          <img src={productImage} alt={`${name}`} />
        </div>
      </Link>
      <div className="app__card-info">
        <Link to={`/product/${name}`} className="app__product-card-mask--name">
          <span className="app__card-name">{name}</span>
        </Link>
        <span className="app__card-price">${price}</span>
      </div>

      <Button btnType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
