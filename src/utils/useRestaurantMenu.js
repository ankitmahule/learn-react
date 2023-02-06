import { useParams } from "react-router-dom";
import { MENU_DETAILS } from "../shared/constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = () => {
  const { resId } = useParams();
  const [menuDetails, setMenuDetails] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState(null);

  useEffect(() => {
    getMenuDetails();
  }, []);

  async function getMenuDetails() {
    const response = await fetch(`${MENU_DETAILS}&menuId=${resId}`);
    const json = await response.json();
    setMenuDetails(json.data);
    setFilteredMenu(Object.values(json?.data?.menu?.items));
  }
  return { menuDetails, filteredMenu, setFilteredMenu };
};

export default useRestaurantMenu;
