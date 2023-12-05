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
    const resturantDetails = json?.data?.cards[0]?.card?.card?.info;
    setRestaurantDetails(resturantDetails);
    const groupedCardData = json?.data?.cards.filter((eachCard) => {
      return eachCard.hasOwnProperty("groupedCard");
    })[0];
    let itemCards = groupedCardData.groupedCard.cardGroupMap.REGULAR.cards
      .filter((eachCard) => {
        return eachCard.card.card.hasOwnProperty("itemCards");
      })
      .map((eachCard) => eachCard.card.card.itemCards);

    itemCards = itemCards.reduce((firstItem, secondItem) => {
      return firstItem.concat(secondItem);
    }, []);

    const finalMenuItems = itemCards.filter((eachItem, index) => {
      return (
        index ===
        itemCards.findIndex(
          (eachCardItem) => eachCardItem.card.info.id === eachItem.card.info.id
        )
      );
    });
    setMenuItems(finalMenuItems);
    setFilteredMenuItems(finalMenuItems);
  }
  return {
    restaurantDetails,
    menuItems,
    filteredMenuItems,
    setFilteredMenuItems,
  };
};

export default useRestaurantMenu;
