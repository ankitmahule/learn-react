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
      <div className="flex pb-5 justify-between items-center">
        <h1 className="py-2 my-2 text-3xl font-bold">Cart Items</h1>
        <button className="btn">Clear Cart</button>
      </div>
      <div className="flex justify-evenly">
        <div className="items-list">
          {Object.values(cartItems).map((cartItem, index) => {
            return (
              <div
                key={cartItem.menu.id}
                className="border-bottom py-5 flex cart-item items-center justify-between"
              >
                <div className="flex justify-between mr-5 items-center">
                  <img
                    className="mr-5"
                    src={`${IMG_CDN_URL}/${cartItem?.menu?.cloudinaryImageId}`}
                    alt={cartItem?.menu?.name}
                  />

                  <div className="details">
                    <p className="break-words">{cartItem?.menu?.name}</p>
                    <p>{cartItem?.menu?.price}</p>
                  </div>
                </div>

                <AddToCart cartItems={cartItems} menu={cartItem.menu} />
              </div>
            );
          })}
        </div>
        <div className="divider"></div>
        <div className="h-40">1234</div>
      </div>
    </div>
  );
};

export default Cart;
