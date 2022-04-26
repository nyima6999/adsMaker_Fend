import React from "react";
import MainPage from "../../components/MainPage";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import axios from "axios";
import errorMessage from "../../components/errorMessage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      // setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      // setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <MainPage className="Login-forms" title="Login">
      <div className="Login-container">
        {error && <errorMessage />}
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
