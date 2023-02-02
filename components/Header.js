import { Link } from "react-router-dom";

const Header = () => (
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
          <li>
            <Link to="/login">Sign In</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
