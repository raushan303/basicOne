import axios from 'axios';
import * as actionTypes from '../actionTypes/getComments';
import * as actionHandlers from '../helpers/actionHandlers';
import headers from '../helpers/headers';
import { LOCAL_BASE_URL } from '../../shared/baseurl';

export const getComments = (subtopicId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_COMMENTS));
    return axios
      .get(`${LOCAL_BASE_URL}/getComments/${subtopicId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.GET_COMMENTS_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_COMMENTS_FAILED, error));
      });
  };

export const uploadComments = (data) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.UPLOAD_COMMENTS));
    return axios
      .post(`${LOCAL_BASE_URL}/uploadComments`, data, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.UPLOAD_COMMENTS_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.UPLOAD_COMMENTS_FAILED, error));
      });
  };

export const deleteComments = (data) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.DELETE_COMMENTS));
    return axios
      .post(`${LOCAL_BASE_URL}/deleteComments`, data, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.DELETE_COMMENTS_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.DELETE_COMMENTS_FAILED, error));
      });
  };

export const editComments = (data) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.EDIT_COMMENTS));
    return axios
      .post(`${LOCAL_BASE_URL}/editComments`, data, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.EDIT_COMMENTS_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.EDIT_COMMENTS_FAILED, error));
      });
  };

export const updateCommentLikeStatus = (data) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.UPDATE_COMMENT_LIKE_STATUS));
    return axios
      .post(`${LOCAL_BASE_URL}/updateCommentLikeStatus`, data, headers())
      .then((response) => {
        if (response) {
          dispatch(
            actionHandlers.handleResponse(actionTypes.UPDATE_COMMENT_LIKE_STATUS_SUCCESS, response)
          );
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.UPDATE_REPLY_LIKE_STATUS_FAILED, error));
      });
  };

export const getReply = (commentId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_REPLY));
    return axios
      .get(`${LOCAL_BASE_URL}/getReply/${commentId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.GET_REPLY_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_REPLY_FAILED, error));
      });
  };

export const uploadReply = (data) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.UPLOAD_REPLY));
    return axios
      .post(`${LOCAL_BASE_URL}/uploadReply`, data, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.UPLOAD_REPLY_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.UPLOAD_REPLY_FAILED, error));
      });
  };

export const deleteReply = (data) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.DELETE_REPLY));
    return axios
      .post(`${LOCAL_BASE_URL}/deleteReply`, data, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.DELETE_REPLY_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.DELETE_REPLY_FAILED, error));
      });
  };

export const editReply = (data) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.EDIT_REPLY));
    return axios
      .post(`${LOCAL_BASE_URL}/editReply`, data, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.EDIT_REPLY_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.EDIT_REPLY_FAILED, error));
      });
  };

export const updateReplyLikeStatus = (data) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.UPDATE_REPLY_LIKE_STATUS));
    return axios
      .post(`${LOCAL_BASE_URL}/updateReplyLikeStatus`, data, headers())
      .then((response) => {
        if (response) {
          dispatch(
            actionHandlers.handleResponse(actionTypes.UPDATE_REPLY_LIKE_STATUS_SUCCESS, response)
          );
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.UPDATE_REPLY_LIKE_STATUS_FAILED, error));
      });
  };

export const updateActiveComment = (data) =>
  function (dispatch) {
    dispatch(actionHandlers.handleResponse(actionTypes.UPDATE_ACTIVE_COMMENT_SUCCESS, data));
  };
