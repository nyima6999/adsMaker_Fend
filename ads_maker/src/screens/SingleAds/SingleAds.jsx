import React, { useEffect, useState } from "react";
import MainPage from "../../components/MainPage";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateAdsAction, deleteAdsAction } from "../../actions/adsActions";
import { useNavigate, useParams } from "react-router-dom";

function SingleAds() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();
  const params = useParams();

  const dispatch = useDispatch();

  const adsUpdate = useSelector((state) => state.adsUpdate);
  const { loading, error } = adsUpdate;

  const adsDelete = useSelector((state) => state.adsDelete);
  const { loading: loadingDelete, error: errorDelete } = adsDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteAdsAction(id));
    }
    navigate("/AdsPage");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/ads/${params.id}`
      );

      setTitle(data.title);
      setDescription(data.description);
    };

    fetching();
  }, [params.id]);

  const resetHandler = () => {
    setTitle("");
    setDescription("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateAdsAction(params.id, title, description));
    if (!title || !description) return;
    resetHandler();
    navigate("/AdsPage");
  };

  return (
    <MainPage title="Edit Note">
      <Card>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {/* {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )} */}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the description "
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            {/* {loading && <Loading size={50} />} */}
            <Button type="submit" value="submit">
              Update Note
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(params.id)}
            >
              Delete Note
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </MainPage>
  );
}

export default SingleAds;
