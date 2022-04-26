import React from "react";
import MainPage from "../../components/MainPage";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./RegisterPage.css";
import errorMessage from "../../components/errorMessage";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(initialState);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    if (password !== confirmpassword) {
      setMessage("Passwords Do Not Match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        // setLoading(true);
        const { data } = await axios.post(
          "http://localhost:5000/api/users",
          {
            name,
            email,
            password,
          },
          config
        );
        // setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <MainPage className="Register-forms" title="Register">
      <div className="Register-container">
        {/* {error && <errorMessage />} */}
        {message && <errorMessage>{message}</errorMessage>}
        <form onSubmit={onSubmit}>
          <div className="name">
            <label for="name">Name</label>
            <input
              type="name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="Register-email">
            {" "}
            <label for="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="Register-password">
            <label for="pass">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className="Confirm-password">
            <label for="pass"> Confirm Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            ></input>
          </div>
          <div>
            <button className="login-submit">Register</button>
          </div>
        </form>
        <div>
          {" "}
          <p className="New-user">
            Already Registered? <Link to="/login">Login Here</Link>
          </p>
        </div>
      </div>
    </MainPage>
  );
};

export default RegisterPage;
