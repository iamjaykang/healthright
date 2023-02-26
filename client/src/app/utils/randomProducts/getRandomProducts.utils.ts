import { CartItemData, Product } from "../../models/product.model";

const getRandomProducts = (
  productsArray: Product[],
  limit = 4,
  cartItems: CartItemData[] = []
) => {
  const availableProducts = productsArray.filter((product) => {
    return !cartItems.find((item) => item.id === product.id);
  });
  const shuffledProducts = availableProducts.sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(0, limit);
};

export default getRandomProducts;
