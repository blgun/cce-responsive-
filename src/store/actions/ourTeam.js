import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchOurTeamFailed = (error) => {
  return {
    type: actionTypes.FETCH_OURTEAM_FAIL,
    error: error,
  };
};

export const fetchOurTeamStart = () => {
  return {
    type: actionTypes.FETCH_OURTEAM_START,
  };
};

export const fetchOurTeamSuccess = (data) => {
  return {
    type: actionTypes.FETCH_OURTEAM_SUCCESS,
    data: data,
  };
};

export const fetchOurTeam = () => {
  return (dispatch) => {
    dispatch(fetchOurTeamStart());
    axios
      .get("/news/test")
      .then((response) => {
        dispatch(fetchOurTeamSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchOurTeamFailed(error));
      });
  };
};
