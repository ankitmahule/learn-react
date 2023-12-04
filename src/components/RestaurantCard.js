import { IMG_CDN_URL } from "../shared/constants";
import { getStarRatings } from "../utils/utils";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  avgRating,
  locality,
  areaName,
  city,
}) => {
  return (
    <>
      <div className="restaurant-card w-full">
        <div className="img-section">
          <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        </div>
        <h2 className="my-2 text-2xl font-bold">{name}</h2>
        <p className="my-2">
          <em className="fa fa-location mr-2"></em>
          {locality}, {areaName}, {city}
        </p>
        <p className="my-2">
          <em className="fa fa-cutlery mr-2"></em>
          {cuisines?.join(", ")}
        </p>
        <div className="flex justify-between items-center">
          <h4 className="my-2 font-bold">
            <em className="fa fa-tachometer mr-2"></em>
            {sla?.lastMileTravelString}
          </h4>
          <h5 className="my-2">
            {avgRating === "--" ? "No ratings yet" : getStarRatings(avgRating)}
          </h5>
        </div>
      </div>
    </>
  );
};
export default RestaurantCard;
