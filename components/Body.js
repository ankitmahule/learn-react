import { restaurantList } from "../shared/constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterRestaurant(searchText, restauraunts) {
  return restauraunts.filter((eachRestaurant) =>
    eachRestaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
const Body = () => {
  const [restuarants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search any restaurant"
          className="search-input"
          onKeyUp={(e) => {
            const text = e.target.value;
            if (text !== "") {
              setRestaurants(filterRestaurant(e.target.value, restuarants));
            } else {
              setRestaurants(restaurantList);
            }
            setSearchText(text);
          }}
        />
        <button className="btn">
          <em className="fa fa-search"></em>
        </button>
      </div>
      <div className="restaurant-list">
        {restuarants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
