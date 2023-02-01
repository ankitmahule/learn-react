import { IMG_CDN_URL } from "../shared/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { filterMenu } from "../utils/utils";
import { useState } from "react";
import Shimmer from "./Shimmer";

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
          <h1>{menuDetails?.name}</h1>
          <h3>{menuDetails?.lastMileTravelString}</h3>
          <h3>
            {menuDetails?.locality}, {menuDetails?.area}, {menuDetails?.city}
          </h3>
          <h3>{menuDetails?.cuisines?.join(", ")}</h3>
          <h4>{menuDetails?.avgRating}/5</h4>
        </div>
      </div>
      <div className="restaurant-details">
        <div className="search-menu">
          <h1>
            Menu Items <span>({filteredMenu.length} items)</span>
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
        <div className="menu-items">
          {filteredMenu.length > 0 ? (
            filteredMenu?.map((eachMenu) => {
              return (
                <div key={eachMenu.id} className="items">
                  <img
                    src={`${IMG_CDN_URL}/${eachMenu.cloudinaryImageId}`}
                    alt={eachMenu.name}
                  />
                  <h4 className="menu-container">{eachMenu?.name}</h4>
                  <p>{eachMenu.description}</p>
                  <h5>
                    <em className="fa fa-rupee"></em>
                    {parseFloat(eachMenu.price / 100)}
                  </h5>
                </div>
              );
            })
          ) : (
            <div>
              <h1 class="no-items">
                <em className="fa fa-warning"></em>No Menu Items Found!! Please
                Try Again..
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;
