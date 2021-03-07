import { combineReducers } from 'redux';
import * as Types from '../actionTypes/user';

function makeRequestReducer(actionType, initialState = {}) {
  const init = {
    data: [],
    error: false,
    isLoading: false,
    ...initialState,
  };

  return (state = init, { type, payload }) => {
    switch (type) {
      case actionType:
        return {
          ...state,
          isLoading: true,
        };
      case `${actionType}.success`:
        return {
          ...state,
          isLoading: false,
          data: payload.data,
          error: false,
        };
      case `${actionType}.failed`:
        return {
          ...state,
          isLoading: false,
          data: payload,
          error: true,
        };
      default:
        return state;
    }
  };
}

export default combineReducers({
  getLoginData: makeRequestReducer(Types.LOGIN),
});
