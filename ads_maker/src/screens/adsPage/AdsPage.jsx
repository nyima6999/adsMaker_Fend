import React from "react";
import MainPage from "../../components/MainPage";
import { Link } from "react-router-dom";

const AdsPage = () => {
  return (
    <MainPage title="">
      <Link to="createads">
        <button className="create_button">Create New Ads</button>
      </Link>
      <button>edit</button>
      <button>delete</button>
    </MainPage>
  );
};

export default AdsPage;
