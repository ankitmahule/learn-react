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
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h4>{lastMileTravelString}</h4>
      <h5>{avgRating !== "--" ? `${avgRating}/5` : "0/5"}</h5>
    </div>
  </>
);

export default RestaurantCard;
