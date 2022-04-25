import React from "react";
import MainPage from "../../components/MainPage";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <MainPage className="Login-forms" title="Login">
      <form>
        <div className="login-email">
          {" "}
          <label for="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
          ></input>
        </div>
        <div className="login-password">
          <label for="pass">Password:</label>
          <input
            type="password"
            id="pass"
            name="password"
            placeholder="password"
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
    </MainPage>
  );
};

export default LoginPage;
