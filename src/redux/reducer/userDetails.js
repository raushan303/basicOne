import { combineReducers } from 'redux';
import * as Types from '../actionTypes/user';

function makeRequestReducer(actionType, initialState = {}) {
  const userDetails = {
    phoneNo: null,
    userId: null,
    isLoggedIn: false,
  };
  const init = {
    data: userDetails,
    error: false,
    isLoading: false,
    response: false,
    ...initialState,
  };

  return (state = init, { type, payload }) => {
    switch (type) {
      case actionType:
        return {
          ...state,
          isLoading: true,
          response: false,
        };
      case `${actionType}.success`:
        return {
          ...state,
          isLoading: false,
          data: { ...userDetails, ...payload.data },
          error: false,
          response: true,
        };
      case `${actionType}.failed`:
        return {
          ...state,
          isLoading: false,
          data: payload,
          error: true,
          response: true,
        };
      default:
        return state;
    }
  };
}

export default combineReducers({
  userDetails: makeRequestReducer(Types.UPDATE_USER_DETAILS),
});
