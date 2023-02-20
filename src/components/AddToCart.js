import { useDispatch } from "react-redux";
import { addItem, clearItems, removeItem } from "../utils/cartSlice";
import "../css/add-to-cart.scss";
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
      <div className="rounded decrease">
        <button
          type="button"
          onClick={() => {
            if (cartItems[menu.id]?.quantity <= 1) {
              clearCart(menu.id);
            } else {
              removeFromCart(menu.id);
            }
          }}
        >
          <em className="fa fa-minus"></em>
        </button>
      </div>
      <div className="quantity-input">
        {!cartItems[menu.id]?.quantity ? 0 : cartItems[menu.id]?.quantity}
      </div>
      <div className="rounded increase">
        <button
          type="button"
          onClick={() => {
            addToCart(menu);
          }}
        >
          <em className="fa fa-plus"></em>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
