import { combineReducers } from 'redux';
import * as Types from '../actionTypes/addVideo';

function makeRequestReducer(actionType, initialState = {}) {
  const init = {
    data: [],
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
          data: payload.data,
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
  addVideoData: makeRequestReducer(Types.ADD_VIDEO),
  getVideoId: makeRequestReducer(Types.GET_VIDEO_ID),
});
