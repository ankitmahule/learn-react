import { useDispatch } from "react-redux";
import { addItem, clearItems, removeItem } from "../utils/cartSlice";

const AddToCart = ({ cartItems, menu }) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item));
  };
  const removeFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const clearCart = (itemId) => {
    dispatch(clearItems(itemId));
  };
  return (
    <div className="add-quantity">
      <div className="decrease">
        <button
          type="button"
          className="fa fa-minus"
          onClick={() => {
            if (cartItems[menu.id]?.quantity <= 1) {
              clearCart(menu.id);
            } else {
              removeFromCart(menu.id);
            }
          }}
        ></button>
      </div>
      <div className="quantity-input">
        {!cartItems[menu.id]?.quantity ? 0 : cartItems[menu.id]?.quantity}
      </div>
      <div className="increase">
        <button
          type="button"
          className="fa fa-plus"
          onClick={() => {
            addToCart(menu);
          }}
        ></button>
      </div>
    </div>
  );
};

export default AddToCart;
