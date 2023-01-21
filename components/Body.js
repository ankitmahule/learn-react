import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RESTAURANT_LIST } from "../shared/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterRestaurant(text, filteredRestaurants) {
  return filteredRestaurants.filter((eachRestaurant) =>
    eachRestaurant?.data?.name?.toLowerCase().includes(text?.toLowerCase())
  );
}

async function getRestaurants() {
  const response = await fetch(RESTAURANT_LIST);
  return await response?.json();
}

const Body = () => {
  let [restaurants, setRestaurants] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants().then((response) => {
      setRestaurants(response?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(response?.data?.cards[2]?.data?.data?.cards);
    });
  }, []);

  return (
    <>
      <div className="banner">
        <h1>
          Welcome, Get All Your Favorite Food Items At The Doorstep, Order Now
        </h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search any restaurant"
            className="search-input"
            onKeyUp={(e) => {
              const text = e.target.value;
              if (text !== "") {
                setFilteredRestaurants(filterRestaurant(text, restaurants));
              } else {
                setRestaurants(restaurants);
              }
              setSearchText(text);
            }}
          />
          <button className="btn">
            {searchText === "" ? (
              <em className="fa fa-search"></em>
            ) : (
              <em
                className="fa fa-multiply"
                onClick={() => setSearchText("")}
              ></em>
            )}
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {restaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          <>
            <h1>Featured Restaurants</h1>
            <div className="restaurant-list">
              {restaurants.map((restaurant) => (
                <Link to={`/restaurant/${restaurant?.data?.id}`}>
                  <RestaurantCard
                    {...restaurant?.data}
                    key={restaurant?.data?.id}
                  />
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
