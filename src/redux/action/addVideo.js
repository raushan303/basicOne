import axios from 'axios';
import * as actionTypes from '../actionTypes/addVideo';
import * as actionHandlers from '../helpers/actionHandlers';
import headers from '../helpers/headers';
import { LOCAL_BASE_URL } from '../../shared/baseurl';

export const addVideo = (data) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.ADD_VIDEO));
    return axios
      .post(`${LOCAL_BASE_URL}/addSubtopic`, data, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.ADD_VIDEO_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.ADD_VIDEO_FAILED, error));
      });
  };

export const getVideoId = () =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_VIDEO_ID));
    return axios
      .get(`${LOCAL_BASE_URL}/getVideoId`, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.GET_VIDEO_ID_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_VIDEO_ID_FAILED, error));
      });
  };
