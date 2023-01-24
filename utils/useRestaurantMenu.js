import { useParams } from "react-router-dom";
import { MENU_DETAILS } from "../shared/constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = () => {
  const { resId } = useParams();
  const [menuDetails, setMenuDetails] = useState(null);

  useEffect(() => {
    getMenuDetails();
  }, []);

  async function getMenuDetails() {
    const response = await fetch(`${MENU_DETAILS}&menuId=${resId}`);
    const json = await response.json();
    setMenuDetails(json.data.menu.items);
  }
  return menuDetails;
};

export default useRestaurantMenu;
