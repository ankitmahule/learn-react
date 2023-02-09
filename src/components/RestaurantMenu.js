import { IMG_CDN_URL } from "../shared/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { filterMenu, getStarRatings } from "../utils/utils";
import { useState } from "react";
import Shimmer from "./Shimmer";
import "../css/menu.scss";

const RestaurantMenu = () => {
  const { menuDetails, filteredMenu, setFilteredMenu } = useRestaurantMenu();
  const [searchText, setSearchText] = useState("");
  return !menuDetails ? (
    <Shimmer />
  ) : (
    <section className="container">
      <div className="restaurant-data">
        <div className="restaurant-img">
          <img
            src={`${IMG_CDN_URL}/${menuDetails?.cloudinaryImageId}`}
            alt={menuDetails?.name}
          />
        </div>
        <div className="details">
          <h1 className="my-2 text-2xl font-bold">{menuDetails?.name}</h1>
          <p className="my-2">{menuDetails?.lastMileTravelString}</p>
          <p className="my-2">
            {menuDetails?.locality}, {menuDetails?.area}, {menuDetails?.city}
          </p>
          <h3 className="my-2 font-bold">
            {menuDetails?.cuisines?.join(", ")}s
          </h3>
          <h4 className="my-2">
            {menuDetails.avgRatingString === "--"
              ? "No ratings yet"
              : getStarRatings(menuDetails.avgRating)}
          </h4>
        </div>
      </div>
      <div className="restaurant-details">
        <div className="search-menu">
          <h1 className="text-2xl font-bold">
            Menu Items <span>({filteredMenu?.length})</span>
          </h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search any restaurant"
              className="search-input"
              value={searchText}
              onChange={(e) => {
                const text = e.target.value;
                if (text !== "") {
                  setFilteredMenu(filterMenu(text, filteredMenu));
                } else {
                  setFilteredMenu(Object.values(menuDetails?.menu?.items));
                }
                setSearchText(text);
              }}
            />

            <button className="btn">
              <em
                className={searchText === "" ? "" : "fa fa-close"}
                onClick={() => {
                  setSearchText("");
                  setFilteredMenu(Object.values(menuDetails?.menu?.items));
                }}
              ></em>
            </button>
          </div>
        </div>
        {filteredMenu?.length <= 0 ? (
          <div>
            <h1 className="no-items text-3xl text-center text-slate-700">
              <em className="fa fa-warning mx-2"></em>No Menu Items Found!!
              Please Try Again..
            </h1>
          </div>
        ) : (
          <div className="menu-items">
            {filteredMenu?.map((eachMenu) => {
              console.log(eachMenu);
              return (
                <div key={eachMenu.id} className="items">
                  <img
                    src={`${IMG_CDN_URL}/${eachMenu.cloudinaryImageId}`}
                    alt={eachMenu.name}
                  />
                  <h4 className="menu-container text-xl py-2 font-bold">
                    {eachMenu?.name}
                  </h4>
                  <p>{eachMenu.description}</p>
                  <div className="price-container">
                    <h5 className="text-xl font-bold">
                      <em className="fa fa-rupee"></em>
                      {parseFloat(eachMenu.price / 100)}
                    </h5>
                    <button className="cart-button">Add To Cart</button>
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