import { combineReducers } from 'redux';
import * as Types from '../actionTypes/courses';

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
  getSubjectStat: makeRequestReducer(Types.GET_SUBJECT_STAT),
  getSubjects: makeRequestReducer(Types.GET_SUBJECTS),
  getChapters: makeRequestReducer(Types.GET_CHAPTERS),
  getTopics: makeRequestReducer(Types.GET_TOPICS),
  getSubtopics: makeRequestReducer(Types.GET_SUBTOPICS),
});
