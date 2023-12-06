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
    let res = json.data.cards
      .filter((eachCard) =>
        eachCard?.card?.card?.gridElements?.infoWithStyle.hasOwnProperty(
          "restaurants"
        )
      )
      .map(
        (eachCard) =>
          eachCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    res = res.reduce((firstItem, secondItem) => {
      return firstItem.concat(secondItem);
    }, []);
    const finalRestaurantItems = res.filter((eachItem, index) => {
      return (
        index ===
        res.findIndex(
          (eachCardItem) => eachCardItem.info.id === eachItem.info.id
        )
      );
    });
    setRestaurants(finalRestaurantItems);
  }

  return restaurants;
};

export default useRestaurant;
