import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_DETAILS, IMG_CDN_URL } from "../shared/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menuDetails, setMenuDetails] = useState(null);

  useEffect(() => {
    getMenuDetails().then((response) => {
      setMenuDetails(response?.data?.menu?.items);
    });
  }, []);

  async function getMenuDetails() {
    const response = await fetch(`${MENU_DETAILS}&menuId=${resId}`);
    return await response.json();
  }

  return !menuDetails ? (
    <Shimmer />
  ) : (
    <div class="menu-items container">
      {Object.values(menuDetails).map((eachMenu) => {
        return (
          <div key={eachMenu.id} class="items">
            <img src={`${IMG_CDN_URL}/${eachMenu.cloudinaryImageId}`} />
            <h4 className="menu-container">{eachMenu?.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
