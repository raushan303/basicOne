import axios from 'axios';
import * as actionTypes from '../actionTypes/user';
import * as actionHandlers from '../helpers/actionHandlers';
import headers from '../helpers/headers';
import { LOCAL_BASE_URL } from '../../shared/baseurl';

export const login = (data) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.LOGIN));
    return axios
      .post(`${LOCAL_BASE_URL}/login`, data)
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.LOGIN_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.LOGIN_FAILED, error));
      });
  };
