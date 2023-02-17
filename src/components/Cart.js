import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../shared/constants";
import "../css/cart.scss";
import "../css/add-to-cart.scss";
import Breadcrumbs from "./Breadcrumbs";
import AddToCart from "./AddToCart";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="container">
      <Breadcrumbs
        {...[
          { name: "Home", link: "/" },
          { name: "Menu", link: "/" },
          { name: "Cart", link: null },
        ]}
      />

      <h1 className="py-2 my-2 text-3xl font-bold border-bottom">Cart Items</h1>
      <div className="items-list">
        {Object.values(cartItems).map((cartItem, index) => {
          return (
            <div
              key={cartItem.menu.id}
              className="my-10 p-10 border-bottom flex cart-item items-center justify-between"
            >
              <div className="w-20 mr-5">
                <img
                  className="w-screen"
                  src={`${IMG_CDN_URL}/${cartItem?.menu?.cloudinaryImageId}`}
                  alt={cartItem?.menu?.name}
                />
              </div>
              <p>{cartItem?.menu?.name}</p>
              <AddToCart cartItems={cartItems} menu={cartItem.menu} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
