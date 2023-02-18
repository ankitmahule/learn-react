import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import "../css/header.scss";

const Header = () => {
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [headerBackground, setHeaderBackground] =
    useState("header-transparent");

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setHeaderBackground("header-transparent");
    } else if (window.scrollY > 1000) {
      return setHeaderBackground("header-background");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <header className={"header" + " " + headerBackground}>
      <nav className="container">
        <h1>
          <Link to="/">
            <em className="fa fa-home mr-2"></em>Food Villa
          </Link>
        </h1>
        <div className="right">
          <ul>
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
            <li>
              <Link to="/cart">
                <em className="fa fa-shopping-cart icon-space ml-2"></em>
                Cart
                <span className="ml-2">
                  {Object.values(cartItems).reduce(
                    (accumulator, eachItem) => accumulator + eachItem.quantity,
                    0
                  )}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
