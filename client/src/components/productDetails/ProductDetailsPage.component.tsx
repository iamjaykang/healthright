import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProduct,
  selectProductsIsLoading,
} from "../../app/stores/products/product.selector";
import { fetchProductByNameLoading } from "../../app/stores/products/product.action";
import Spinner from "../../app/common/spinner/Spinner.common";
import Button from "../../app/common/button/Button.common";
import { addItemToCart } from "../../app/stores/cart/cart.action";
import { selectCartItems } from "../../app/stores/cart/cart.selector";
import Accordion from "../../app/common/accordion/Accordion.common";
import { Product } from "../../app/models/product.model";

const ProductDetailsPage = () => {
  const { productName } = useParams();

  let [quantity, setQuantity] = useState(1);
  const [activeAccordionId, setActiveAccordionId] = useState<string | null>(null);

  const dispatch = useDispatch();

  const product = useSelector(selectProduct) as Product;

  const isProductLoading = useSelector(selectProductsIsLoading);

  const cartItems = useSelector(selectCartItems);

  const resetQuantity = () => {
    setQuantity(1);
  };

  const handleIncrementClick = () => {
    setQuantity((quantity += 1));
  };

  const handleDecrementClick = () => {
    setQuantity((quantity -= 1));
  };

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product, quantity));
    resetQuantity();
  };

  const handleAccordionClick = (id: string | null) => {
    setActiveAccordionId(id);
  };

  useEffect(() => {
    if (productName)
    dispatch(fetchProductByNameLoading(productName));
  }, [dispatch, productName]);

  if (isProductLoading || !product) {
    return <Spinner />;
  }

  return (
    <div className="app__product-details">
      <div className="app__product-details-container--image">
        <img
          src={product.productImage}
          alt={product.name}
          className="app__product-details--image"
        />
      </div>
      <div className="app__product-details-container--info">
        <h1 className="app__product-details--name">{product.name}</h1>
        <div className="app__product-details--vendor"><Link to={`/brands/${product.vendor}`}>{product.vendor as string}</Link></div>
        <div className="app__product-details--category">{product.category as string}</div>
        <div className="app__product-details--price">${product.price}</div>
        <div className="app__product-details--description">
          {parse(product.description)}
        </div>
        <div className="app__product-details-container--quantity">
          <span className="app__product-details--quantity-title">Quantity</span>
          <div className="app__product-details--quantity">
            <span className="app__product-details--value">{quantity}</span>
            <div className="app__product-details-action--value">
              <button onClick={() => handleDecrementClick()}>-</button>
              <button onClick={() => handleIncrementClick()}>+</button>
            </div>
          </div>
        </div>
        <Button btnType="inverted" onClick={addProductToCart}>
          Add to Cart
        </Button>
        <Accordion
          id="ingredients"
          title="Ingredients"
          content={parse(product.description)}
          activeId={activeAccordionId}
          onAccordionClick={handleAccordionClick}
        />
        <Accordion
          id="care"
          title="Care Guide"
          content={parse(product.description)}
          activeId={activeAccordionId}
          onAccordionClick={handleAccordionClick}
        />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
