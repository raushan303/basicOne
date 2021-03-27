import { combineReducers } from 'redux';
import * as Types from '../actionTypes/getComments';

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
  getComments: makeRequestReducer(Types.GET_COMMENTS),
  uploadComments: makeRequestReducer(Types.UPLOAD_COMMENTS),
  editComments: makeRequestReducer(Types.EDIT_COMMENTS),
  deleteComments: makeRequestReducer(Types.DELETE_COMMENTS),
  updateCommentLikeStatus: makeRequestReducer(Types.UPDATE_COMMENT_LIKE_STATUS_SUCCESS),
  getReply: makeRequestReducer(Types.GET_REPLY),
  uploadReply: makeRequestReducer(Types.UPLOAD_REPLY),
  editReply: makeRequestReducer(Types.EDIT_REPLY),
  deleteReply: makeRequestReducer(Types.DELETE_REPLY),
  updateReplyLikeStatus: makeRequestReducer(Types.UPDATE_REPLY_LIKE_STATUS),
  activeComment: makeRequestReducer(Types.UPDATE_ACTIVE_COMMENT),
});
