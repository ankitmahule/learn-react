import { useEffect, useState } from "react";
import { RESTAURANT_LIST } from "../shared/constants";
const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(RESTAURANT_LIST);
    const json = await response.json();
    const res = json.data.cards
      .filter((eachCard) =>
        eachCard?.card?.card?.gridElements?.infoWithStyle.hasOwnProperty(
          "restaurants"
        )
      )
      .map(
        (eachCard) =>
          eachCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    console.log(res);
    setRestaurants(res[1]);
  }

  return restaurants;
};

export default useRestaurant;
