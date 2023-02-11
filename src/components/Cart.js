import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../shared/constants";
import "../css/cart.scss";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="container">
      <h1 className="py-2 my-2 text-3xl font-bold border-bottom">Cart Items</h1>
      <div className="items-list">
        {Object.values(cartItems).map((cartItem) => {
          return (
            <div className="my-10 p-10 border flex cart-item items-center">
              <div class="w-20">
                <img
                  className="w-screen"
                  src={`${IMG_CDN_URL}/${cartItem?.menu?.cloudinaryImageId}`}
                  alt={cartItem?.menu}
                />
              </div>
              <p>{cartItem?.menu?.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
