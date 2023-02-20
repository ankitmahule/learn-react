import { useEffect, useState } from "react";
const useTotalPrice = (cartItems) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getTotalPrice(cartItems);
  }, [cartItems]);

  function getTotalPrice(cartItems) {
    setTotalPrice(
      cartItems.reduce((accumulator, eachItem) => {
        return (
          accumulator +
          parseFloat((eachItem.menu.price / 100) * eachItem.quantity)
        );
      }, 0)
    );
  }

  return totalPrice;
};

export default useTotalPrice;
