import { IMG_CDN_URL } from "../shared/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const menuDetails = useRestaurantMenu();
  return !menuDetails ? (
    <Shimmer />
  ) : (
    <div className="menu-items container">
      {Object.values(menuDetails).map((eachMenu) => {
        return (
          <div key={eachMenu.id} className="items">
            <img
              src={`${IMG_CDN_URL}/${eachMenu.cloudinaryImageId}`}
              alt={eachMenu.name}
            />
            <h4 className="menu-container">{eachMenu?.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
