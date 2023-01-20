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
      <div className="banner"></div>
      <div className="container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search any restaurant"
            className="search-input"
            value={searchText}
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
        {restaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="restaurant-list">
            {searchText === ""
              ? restaurants.map((restaurant) => (
                  <Link to={`/restaurant/${restaurant?.data?.id}`}>
                    <RestaurantCard
                      {...restaurant?.data}
                      key={restaurant?.data?.id}
                    />
                  </Link>
                ))
              : filteredRestaurants.map((restaurant) => (
                  <Link to="/restaurant/">
                    <RestaurantCard
                      {...restaurant?.data}
                      key={restaurant?.data?.id}
                    />
                  </Link>
                ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Body;
