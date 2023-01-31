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
