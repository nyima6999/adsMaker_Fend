import axios from "axios";

import {
  ADS_LIST_REQUEST,
  ADS_LIST_FAIL,
  ADS_LIST_SUCCESS,
  ADS_CREATE_REQUEST,
  ADS_CREATE_SUCCESS,
  ADS_CREATE_FAIL,
  ADS_UPDATE_REQUEST,
  ADS_UPDATE_SUCCESS,
  ADS_UPDATE_FAIL,
  ADS_DELETE_REQUEST,
  ADS_DELETE_SUCCESS,
  ADS_DELETE_FAIL,
} from "../constants/adsConstants";

// get ads
export const listAds = () => async (dispatch) => {
  try {
    dispatch({
      type: ADS_LIST_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get("http://localhost:5000/api/ads", config);

    dispatch({
      type: ADS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.message.data.message
        : error.message;
    dispatch({
      type: ADS_LIST_FAIL,
      payload: message,
    });
  }
};

// create/POST
export const createAdsAction = (title, description) => async (dispatch) => {
  try {
    dispatch({
      type: ADS_CREATE_REQUEST,
    });

    const { data } = await axios.post("http://localhost:5000/api/ads/create", {
      title,
      description,
    });

    dispatch({
      type: ADS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ADS_CREATE_FAIL,
      payload: message,
    });
  }
};

// update/PUT
export const updateAdsAction = (id, title, description) => async (dispatch) => {
  try {
    dispatch({
      type: ADS_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `http://localhost:5000/ads/${id}`,
      { title, description },
      config
    );

    dispatch({
      type: ADS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ADS_UPDATE_FAIL,
      payload: message,
    });
  }
};

// delete
export const deleteAdsAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ADS_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`http://localhost:5000/api/ads/${id}`);

    dispatch({
      type: ADS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ADS_DELETE_FAIL,
      payload: message,
    });
  }
};
