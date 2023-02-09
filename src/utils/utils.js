export function filterRestaurant(text, data) {
  return data.filter((eachData) =>
    eachData?.data?.name?.toLowerCase().includes(text?.toLowerCase())
  );
}

export function filterMenu(text, data) {
  return data.filter((eachData) =>
    eachData?.name?.toLowerCase().includes(text?.toLowerCase())
  );
}

export function getStarRatings(ratings) {
  return Array(5)
    .fill()
    .map((value, index) => {
      return (
        <span
          key={index}
          className={getRatingClassNames(index, ratings)}
        ></span>
      );
    });
}

function getRatingClassNames(index, ratings) {
  if (index < Math.floor(ratings)) {
    return "fa fa-star checked";
  } else if (index < Math.ceil(ratings)) {
    return "fa fa-star-half-full checked";
  } else {
    return "fa fa-star-o";
  }
}
