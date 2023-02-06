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
    setRestaurants(json.data.cards[2].data.data.cards);
  }

  return restaurants;
};

export default useRestaurant;
