import { useParams } from "react-router-dom";
import { MENU_DETAILS } from "../shared/constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const [filteredMenuItems, setFilteredMenuItems] = useState(null);

  useEffect(() => {
    getMenuDetails();
  }, []);

  async function getMenuDetails() {
    const response = await fetch(`${MENU_DETAILS}&restaurantId=${resId}`);
    const json = await response.json();
    const cardDetails = json?.data?.cards[0]?.card?.card?.info;
    setRestaurantDetails(cardDetails);
    /* json?.data?.cards.filter(eachCard => {
      return eachCard.hasOwnProperty('groupedCard')
    }).filter(eachGroupedCard => {
      return eachGroupedCard.
    }) */
    setMenuItems(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setFilteredMenuItems(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }
  return {
    restaurantDetails,
    menuItems,
    filteredMenuItems,
    setFilteredMenuItems,
  };
};

export default useRestaurantMenu;
