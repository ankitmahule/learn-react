const Shimmer = () => {
  return (
    <>
      <div className="container shimmer-container">
        {Array(10)
          .fill()
          .map(() => (
            <div className="shimmer">
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
