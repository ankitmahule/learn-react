import { calculatePrice } from "../utils/utils";
const PriceInfo = ({ cartItems, menu }) => {
  return (
    <>
      <em className="fa fa-rupee"></em>
      {calculatePrice(
        menu?.price || menu?.defaultPrice,
        cartItems[menu.id]?.quantity
      )}
    </>
  );
};

export default PriceInfo;
