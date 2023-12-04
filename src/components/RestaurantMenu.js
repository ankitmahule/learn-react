import { IMG_CDN_URL } from "../shared/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { filterMenu, getStarRatings } from "../utils/utils";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import "../css/menu.scss";
import "../css/add-to-cart.scss";
import Breadcrumbs from "./Breadcrumbs";
import AddToCart from "./AddToCart";
import { addItem } from "../utils/cartSlice";
import PriceInfo from "./PriceInfo";

const RestaurantMenu = () => {
  const {
    restaurantDetails,
    menuItems,
    filteredMenuItems,
    setFilteredMenuItems,
  } = useRestaurantMenu();

  const [searchText, setSearchText] = useState("");
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItem(item));
  };
  return !restaurantDetails ? (
    <Shimmer />
  ) : (
    <section className="container">
      <Breadcrumbs
        {...[
          { name: "Home", link: "/" },
          { name: "Menu", link: null },
        ]}
      />
      <div className="restaurant-data">
        <div className="restaurant-img">
          <img
            src={`${IMG_CDN_URL}/${restaurantDetails?.cloudinaryImageId}`}
            alt={restaurantDetails?.name}
          />
        </div>
        <div className="details">
          <h1 className="my-2 text-2xl font-bold">{restaurantDetails?.name}</h1>
          <p className="my-2">{restaurantDetails?.lastMileTravelString}</p>
          <p className="my-2">
            {restaurantDetails?.locality}, {restaurantDetails?.areaName},
            {restaurantDetails?.city}
          </p>
          <h3 className="my-2 font-bold">
            {restaurantDetails?.cuisines?.join(", ")}s
          </h3>
          <h4 className="my-2">
            {restaurantDetails.avgRatingString === "--"
              ? "No ratings yet"
              : getStarRatings(restaurantDetails.avgRating)}
          </h4>
        </div>
      </div>
      <div className="restaurant-details">
        <div className="search-menu rounded">
          <h1 className="text-2xl font-bold">
            Menu Items <span>({filteredMenuItems?.length})</span>
          </h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search any menu"
              className="search-input rounded"
              value={searchText}
              onChange={(e) => {
                const text = e.target.value;
                if (text !== "") {
                  setFilteredMenuItems(filterMenu(text, menuItems));
                } else {
                  setFilteredMenuItems(menuItems);
                }
                setSearchText(text);
              }}
            />

            <button>
              <em
                className={searchText === "" ? "" : "fa fa-close"}
                onClick={() => {
                  setSearchText("");
                  setFilteredMenuItems(menuItems);
                }}
              ></em>
            </button>
          </div>
        </div>
        {filteredMenuItems?.length <= 0 ? (
          <div>
            <h1 className="no-items text-3xl text-center text-slate-700">
              <em className="fa fa-warning mx-2"></em>No Menu Items Found!!
              Please Try Again..
            </h1>
          </div>
        ) : (
          <div className="menu-items">
            {filteredMenuItems?.map((eachMenu) => {
              return (
                <div key={eachMenu?.card?.info?.id} className="items">
                  <img
                    src={`${IMG_CDN_URL}/${eachMenu?.card?.info?.imageId}`}
                    alt={eachMenu?.card?.info?.name}
                  />
                  <h4 className="menu-container text-xl py-2 font-bold">
                    {eachMenu?.card?.info?.name}
                  </h4>
                  <p>{eachMenu.description}</p>
                  <div className="price-container">
                    <h5 className="text-xl font-bold">
                      <PriceInfo
                        cartItems={cartItems}
                        menu={eachMenu?.card?.info}
                      />
                    </h5>
                    {cartItems.hasOwnProperty(eachMenu?.card?.info?.id) ? (
                      <AddToCart
                        cartItems={cartItems}
                        menu={eachMenu?.card?.info}
                      />
                    ) : (
                      <button
                        className="btn"
                        onClick={() => addToCart(eachMenu?.card?.info)}
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default RestaurantMenu;
