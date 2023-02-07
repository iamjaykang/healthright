const calculateOrderAmount = (items) => {
  let total = 0;
  items.forEach((item) => {
    total += item.price * item.quantity * 100;
  });
  return total;
};

module.exports = calculateOrderAmount;
