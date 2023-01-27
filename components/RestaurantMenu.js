import { IMG_CDN_URL } from "../shared/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const menuDetails = useRestaurantMenu();
  return !menuDetails ? (
    <Shimmer />
  ) : (
    <section className="container">
      {console.log(menuDetails)}
      <div className="restaurant-data">
        <div className="restaurant-img">
          <img
            src={`${IMG_CDN_URL}/${menuDetails?.cloudinaryImageId}`}
            alt={menuDetails?.name}
          />
        </div>
        <div className="details">
          <h1>{menuDetails?.name}</h1>
          <h3>{menuDetails?.lastMileTravelString}</h3>
          <h3>
            {menuDetails?.locality}, {menuDetails?.area}, {menuDetails?.city}
          </h3>
          <h3>{menuDetails?.cuisines?.join(", ")}</h3>
          <h4>{menuDetails?.avgRating}</h4>
        </div>
      </div>
      <div className="restaurant-details">
        <div className="search-menu">
          <h1>Menu Items</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search any restaurant"
              className="search-input"
              /* onChange={(e) => {
              const text = e.target.value;
              if (text !== "") {
                setFilteredRestaurants(filterRestaurant(text, restaurants));
              }
              setSearchText(text);
            }} */
            />

            <button className="btn">
              <em
              /* className={searchText === "" ? "" : "fa fa-close"} */
              /* onClick={() => {
                setSearchText("");
              }} */
              ></em>
            </button>
          </div>
        </div>
        <div className="menu-items">
          {Object.values(menuDetails?.menu?.items).map((eachMenu) => {
            console.log(eachMenu);
            return (
              <div key={eachMenu.id} className="items">
                <img
                  src={`${IMG_CDN_URL}/${eachMenu.cloudinaryImageId}`}
                  alt={eachMenu.name}
                />
                <h4 className="menu-container">{eachMenu?.name}</h4>
                <p>{eachMenu.description}</p>
                <h5>
                  <em className="fa fa-rupee"></em>
                  {eachMenu.final_price}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;
