import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import "../css/header.scss";

import { useLocation } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [headerBackground, setHeaderBackground] =
    useState("header-transparent");

  const location = useLocation();

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setHeaderBackground("header-transparent");
    } else if (window.scrollY > 800) {
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
    <header
      className={
        location.pathname === "/"
          ? headerBackground
          : "static-position header-background"
      }
    >
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
