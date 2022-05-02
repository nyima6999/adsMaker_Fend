import MainPage from "../../components/MainPage";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { listAds, deleteAdsAction } from "../../actions/adsActions";

// ads Page
function AdsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const adsList = useSelector((state) => state.adsList);
  const { loading, error, Ads } = adsList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const adsDelete = useSelector((state) => state.adsDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = adsDelete;

  const adsCreate = useSelector((state) => state.adsCreate);
  const { success: successCreate } = adsCreate;

  const adsUpdate = useSelector((state) => state.adsUpdate);
  const { success: successUpdate } = adsUpdate;

  useEffect(() => {
    dispatch(listAds());
    if (!userInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteAdsAction(id));
    }
  };

  return (
    <MainPage title="">
      <Link to="/createads">
        <Button className="create_button">Create New Ads</Button>
      </Link>
      {Ads?.reverse().map((ads) => (
        <Card style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black ",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center  ",
                font_size: 18,
              }}
            >
              {ads.title}
            </span>
            <div>
              <Button href={`/ads/${ads._id}`}>Edit</Button>
              <Button onClick={() => deleteHandler(ads._id)}>Delete</Button>
            </div>
          </Card.Header>

          <Card.Body eventKey="0">
            <blockquote className="blockquote mb-0">
              <p>{ads.description}</p>
              <footer className="blockquote-footer"></footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </MainPage>
  );
}

export default AdsPage;
