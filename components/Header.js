import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="header">
      <nav className="container">
        <h1>
          <Link to="/">Food Villa</Link>
        </h1>
        <div className="right">
          <ul>
            <li>
              <Link to="/cart">
                <em className="fa fa-shopping-cart icon-space"></em>Cart
              </Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            {!user?.isUserLoggedIn && (
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            )}
            {user?.isUserLoggedIn && (
              <>
                <li>Welcome {`${user?.email}`}</li>
                <li>Logout</li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
