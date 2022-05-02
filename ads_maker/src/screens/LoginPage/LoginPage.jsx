import React from "react";
import MainPage from "../../components/MainPage";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import ErrorMessage from "../../components/errorMessage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/userActions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/AdsPage");
    }
  }, [navigate, userInfo]);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <MainPage className="Login-forms" title="Login">
      <div className="Login-container">
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={onSubmit}>
          <div className="login-email">
            {" "}
            <label for="email">Email address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="login-password">
            <label for="pass">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <button className="login-submit">submit</button>
          </div>
        </form>
        <div>
          {" "}
          <p className="New-user">
            New User? <Link to="/register">Register Here</Link>
          </p>
        </div>
      </div>
    </MainPage>
  );
};

export default LoginPage;
