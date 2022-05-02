import "./header.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {}, [userInfo]);

  return (
    <div className="header">
      <div>
        <h1>
          <Link className="logout" to="/">
            Adsmaker
          </Link>
        </h1>
      </div>

      <div>
        <h1 className="" nav-bar>
          <Link className="adsPage" to="/AdsPage">
            AdsPage
          </Link>
        </h1>
        <h1 className="welcome">Free</h1>
      </div>
      <div>
        <h1>
          {" "}
          <button className="logoutHandler" onClick={logoutHandler}>
            Logout
          </button>
        </h1>
      </div>
    </div>
  );
};

export default Header;
