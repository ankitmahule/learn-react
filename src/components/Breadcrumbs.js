import { Link } from "react-router-dom";
const Breadcrumbs = (props) => {
  return (
    <ul className="breadcrumbs my-5">
      {console.log(props)}
      {Object.values(props).map((eachItem, index) => {
        return (
          <li key={index}>
            {eachItem.link ? (
              <Link to="/">{eachItem.name}</Link>
            ) : (
              eachItem.name
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
