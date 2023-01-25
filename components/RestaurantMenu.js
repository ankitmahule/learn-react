import { IMG_CDN_URL } from "../shared/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const menuDetails = useRestaurantMenu();
  return !menuDetails ? (
    <Shimmer />
  ) : (
    <div className="container restaurant-details">
      <div className="restaurant-data">
        <img
          src={`${IMG_CDN_URL}/${menuDetails.cloudinaryImageId}`}
          alt={menuDetails.name}
        />
        <h3>{menuDetails.name}</h3>
        <p>{menuDetails.cuisines.join(", ")}</p>
        <h4>{menuDetails.lastMileTravelString}</h4>
        <h5>{menuDetails.avgRating}</h5>
      </div>
      <div className="menu-items">
        {Object.values(menuDetails?.menu?.items).map((eachMenu) => {
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
    </div>
  );
};

export default RestaurantMenu;
