import {
  ADS_LIST_REQUEST,
  ADS_LIST_SUCCESS,
  ADS_LIST_FAIL,
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

//GET
export const adsListReducer = (state = { Ads: [] }, action) => {
  switch (action.type) {
    case ADS_LIST_REQUEST:
      return { loading: true };
    case ADS_LIST_SUCCESS:
      return { loading: false, Ads: action.payload };
    case ADS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// CREATE
export const adsCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ADS_CREATE_REQUEST:
      return { loading: true };
    case ADS_CREATE_SUCCESS:
      return { loading: false, ads: action.payload };
    case ADS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//update

export const adsUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ADS_UPDATE_REQUEST:
      return { loading: true };
    case ADS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ADS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

// Delete
export const adsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ADS_DELETE_REQUEST:
      return { loading: true };
    case ADS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ADS_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
