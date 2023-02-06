import "../css/shimmer.scss";

const Shimmer = () => {
  return (
    <>
      <div className="container shimmer-container">
        {Array(10)
          .fill()
          .map((element, index) => (
            <div className="shimmer" key={index}>
              <div className="box shimmer-bg"></div>
              <div className="lines shimmer-bg"></div>
              <div className="lines shimmer-bg"></div>
              <div className="lines shimmer-bg"></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
