import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  data: {},
};

const fetchOurTeamStart = (state, action) => {
  return updateObject(state);
};

const fetchOurTeamFail = (state, action) => {
  return updateObject(state);
};

const fetchOurTeamSuccess = (state, action) => {
  return updateObject(state, { data: action.data });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_OURTEAM_START:
      return fetchOurTeamStart(state, action);
    case actionTypes.FETCH_OURTEAM_SUCCESS:
      return fetchOurTeamSuccess(state, action);
    case actionTypes.FETCH_OURTEAM_FAIL:
      return fetchOurTeamFail(state, action);
    default:
      return state;
  }
};

export default reducer;
