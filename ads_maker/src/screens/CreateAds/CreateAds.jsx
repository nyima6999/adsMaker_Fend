import React, { useEffect, useState } from "react";
import MainPage from "../../components/MainPage";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createAdsAction } from "../../actions/adsActions";
// import Loading from "../../components/Loading";
// import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

function CreateAds() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const adsCreate = useSelector((state) => state.adsCreate);
  const { ads, error, loading } = adsCreate;
  console.log(ads);

  const resetHandler = () => {
    setTitle("");
    setDescription("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    dispatch(createAdsAction(title, description));
    resetHandler();
    navigate("/AdsPage");
  };

  useEffect(() => {}, []);

  return (
    <MainPage title="Create a Note">
      <Form onSubmit={submitHandler}>
        {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            placeholder="Enter the title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            placeholder="Enter the content"
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        {/* {loading && <Loading size={50} />} */}
        <Button type="submit" variant="primary">
          Create Note
        </Button>
        <Button onClick={resetHandler}>Reset Feilds</Button>
      </Form>
    </MainPage>
  );
}

export default CreateAds;
