import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { filterRestaurant } from "../utils/utils";
import "../css/body.scss";

const Body = () => {
  const restaurants = useRestaurant([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  return !restaurants ? (
    <Shimmer />
  ) : (
    <>
      <div className="banner">
        <div className="banner-heading container pt-52">
          <h1 className="font-bold text-5xl leading-relaxed">
            Welcome, <br /> Get All Your Favorite Food Items At The Doorstep,
            Order Now
          </h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search any restaurant"
              className="search-input rounded"
              value={searchText}
              onChange={(e) => {
                const text = e.target.value;
                if (text !== "") {
                  setFilteredRestaurants(filterRestaurant(text, restaurants));
                }
                setSearchText(text);
              }}
            />
            <button>
              <em
                className={searchText === "" ? "" : "fa fa-close"}
                onClick={() => {
                  setSearchText("");
                }}
              ></em>
            </button>

            {searchText !== "" && (
              <div className="search-restaurants">
                <ul>
                  {filteredRestaurants?.map((restaurant) => (
                    <Link
                      key={restaurant?.data?.id}
                      to={`/restaurant/${restaurant?.data?.id}`}
                    >
                      <li>{restaurant?.data?.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="restaurant-container">
        {restaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          <>
            <h1 className="font-bold text-4xl">Featured Restaurants</h1>
            <div className="restaurant-list">
              {restaurants?.map((restaurant) => (
                <Link
                  to={`/restaurant/${restaurant?.data?.id}`}
                  key={restaurant?.data?.id}
                >
                  <RestaurantCard {...restaurant?.data} />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Body;
