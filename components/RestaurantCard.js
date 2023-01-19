import { IMG_CDN_URL } from "../shared/constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
}) => (
  <>
    <div className="restaurant-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h4>{lastMileTravelString}</h4>
      <h5>{avgRating}</h5>
    </div>
  </>
);

export default RestaurantCard;
