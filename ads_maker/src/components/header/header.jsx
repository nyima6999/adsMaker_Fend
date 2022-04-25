import "./header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link className="logout" to="/">
          Adsmaker
        </Link>
      </h1>
      <div className="Nav-bar">
        <h1>
          <Link className="logout" to="/AdsPage">
            AdsPage
          </Link>
        </h1>

        <h1>
          <a className="logout" href="#action/3.4">
            Logout
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Header;
