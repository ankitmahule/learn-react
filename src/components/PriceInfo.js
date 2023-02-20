const PriceInfo = ({ cartItems, menu }) => {
  return (
    <>
      <em className="fa fa-rupee"></em>
      {parseFloat(
        cartItems[menu.id]?.quantity
          ? (menu.price / 100) * cartItems[menu.id]?.quantity
          : (menu.price / 100) * 1
      )}
    </>
  );
};

export default PriceInfo;
