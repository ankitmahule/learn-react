import { IMG_CDN_URL } from "../shared/constants";
import { getStarRatings } from "../utils/utils";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
}) => {
  return (
    <>
      <div className="restaurant-card">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        <h2 className="my-4 text-2xl font-bold">{name}</h2>
        <p className="my-2">{cuisines.join(", ")}</p>
        <h4 className="my-4 font-bold">{lastMileTravelString}</h4>
        <h5 className="my-2">
          {avgRating === "--" ? "No ratings yet" : getStarRatings(avgRating)}
        </h5>
      </div>
    </>
  );
};
export default RestaurantCard;
