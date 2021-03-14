import { combineReducers } from 'redux';
import * as Types from '../actionTypes/getSubtopicsByAuthor';

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
  getSubtopicsByGrade: makeRequestReducer(Types.GET_SUBTOPICS_BY_GRADE),
  getSubtopicsBySubject: makeRequestReducer(Types.GET_SUBTOPICS_BY_SUBJECT),
  getSubtopicsByChapter: makeRequestReducer(Types.GET_SUBTOPICS_BY_CHAPTER),
  getSubtopicsByTopic: makeRequestReducer(Types.GET_SUBTOPICS_BY_TOPIC),
});
