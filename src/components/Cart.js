import { useDispatch, useSelector } from "react-redux";
import { DELIVERY_CHARGES, IMG_CDN_URL, TAXES } from "../shared/constants";
import "../css/cart.scss";
import Breadcrumbs from "./Breadcrumbs";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
import PriceInfo from "./PriceInfo";
import useTotalPrice from "../utils/useTotalPrice";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useTotalPrice(Object.values(cartItems));

  const dispatch = useDispatch();
  function clearCart() {
    dispatch(clearItems());
  }
  return (
    <div className="container">
      <Breadcrumbs
        {...[
          { name: "Home", link: "/" },
          { name: "Menu", link: "/" },
          { name: "Cart", link: null },
        ]}
      />
      {Object.values(cartItems).length > 0 && (
        <div className="flex pb-5 justify-between items-center">
          <h1 className="py-2 my-2 text-3xl font-bold">Cart Items</h1>
          <button
            className="btn"
            onClick={() => {
              clearCart();
            }}
          >
            Clear Cart
          </button>
        </div>
      )}

      {Object.values(cartItems).length <= 0 ? (
        <div className="flex items-center justify-center">
          <div className="empty-cart"></div>
          <h1 className="text-3xl mt-16  text-gray-500 leading-loose text-center">
            Your cart is empty... <br />
            Please add some food items
          </h1>
        </div>
      ) : (
        <div className="flex">
          <div className="items-list w-4/6 pr-6">
            {Object.values(cartItems).map((cartItem) => {
              return (
                <div
                  key={cartItem.menu.id}
                  className="border-bottom py-5 flex cart-item items-center justify-between"
                >
                  <div className="flex justify-between mr-5 items-center">
                    <img
                      className="mr-5"
                      src={`${IMG_CDN_URL}/${cartItem?.menu?.imageId}`}
                      alt={cartItem?.menu?.name}
                    />

                    <div className="details">
                      <p className="break-words">{cartItem?.menu?.name}</p>
                      <p>
                        <PriceInfo
                          cartItems={cartItems}
                          menu={cartItem?.menu}
                        />
                      </p>
                    </div>
                  </div>

                  <AddToCart cartItems={cartItems} menu={cartItem?.menu} />
                </div>
              );
            })}
          </div>
          <div className="divider"></div>
          <div className="bill-details w-2/6 pl-6">
            <h4 className="font-bold text-2xl my-4 pb-2 border-bottom text-left">
              Bill Details
            </h4>
            <div className="flex justify-between price-info h-60">
              <ul>
                <li>Item Total</li>
                <li className="mb-4">Delivery Charges</li>
                <li className="mb-10">Government Taxes and Charges</li>
                <li className="font-bold">Final Price</li>
              </ul>
              <ul className="text-right">
                <li>
                  <em className="fa fa-rupee mr-2"></em>
                  <span>{totalPrice.toFixed(2)}</span>
                </li>
                <li>
                  <em className="fa fa-rupee mr-2"></em>
                  <span>{DELIVERY_CHARGES.toFixed(2)}</span>
                </li>
                <li className="mb-10">
                  <em className="fa fa-rupee mr-2"></em>
                  <span>{Math.round(totalPrice * TAXES * 100) / 100}</span>
                </li>
                <li className="font-bold">
                  <em className="fa fa-rupee mr-2"></em>
                  <span>
                    {Math.round(
                      (totalPrice + totalPrice * TAXES + DELIVERY_CHARGES) * 100
                    ) / 100}
                  </span>
                </li>
              </ul>
            </div>
            <div className="payment flex justify-between items-center">
              <Link to="/">
                <em className="fa fa-angle-left mr-2"></em>Back
              </Link>
              <button className="btn">
                Proceed to pay <em className="ml-2 fa fa-angle-right"></em>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
