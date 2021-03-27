import axios from 'axios';
import * as actionTypes from '../actionTypes/getCoursesStat';
import * as actionHandlers from '../helpers/actionHandlers';
import headers from '../helpers/headers';
import { LOCAL_BASE_URL } from '../../shared/baseurl';

export const getSubjectStats = (subjectId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_SUBJECT_STATS));
    return axios
      .get(`${LOCAL_BASE_URL}/getSubjectStats/${subjectId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.GET_SUBJECT_STATS_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_SUBJECT_STATS_FAILED, error));
      });
  };

export const getChaptersStats = (subjectId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_CHAPTERS_STATS));
    return axios
      .get(`${LOCAL_BASE_URL}/getChaptersStats/${subjectId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.GET_CHAPTERS_STATS_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_CHAPTERS_STATS_FAILED, error));
      });
  };

export const getTopicsStats = (chapterId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_TOPICS_STATS));
    return axios
      .get(`${LOCAL_BASE_URL}/getTopicsStats/${chapterId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.GET_TOPICS_STATS_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_TOPICS_STATS_FAILED, error));
      });
  };

export const getSubtopicsStats = (topicId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_SUBTOPICS_STATS));
    return axios
      .get(`${LOCAL_BASE_URL}/getSubtopicsStats/${topicId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(
            actionHandlers.handleResponse(actionTypes.GET_SUBTOPICS_STATS_SUCCESS, response)
          );
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_SUBTOPICS_STATS_FAILED, error));
      });
  };

export const updateActiveSubtopic = (data) =>
  function (dispatch) {
    dispatch(actionHandlers.handleResponse(actionTypes.UPDATE_ACTIVE_SUBTOPIC_SUCCESS, data));
  };
