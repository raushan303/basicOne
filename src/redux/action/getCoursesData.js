import axios from 'axios';
import * as actionTypes from '../actionTypes/getCoursesData';
import * as actionHandlers from '../helpers/actionHandlers';
import headers from '../helpers/headers';
import { LOCAL_BASE_URL } from '../../shared/baseurl';

export const getSubjectStat = (subjectId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_SUBJECT_STAT));
    return axios
      .get(`${LOCAL_BASE_URL}/getSubjectStat/${subjectId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.GET_SUBJECT_STAT_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_SUBJECT_STAT_FAILED, error));
      });
  };

export const getSubjects = (grade) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_SUBJECTS));
    return axios
      .get(`${LOCAL_BASE_URL}/getSubjects/${grade}`, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.GET_SUBJECTS_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_SUBJECTS_FAILED, error));
        console.log('my name is raushan');
      });
  };

export const getChapters = (subjectId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_CHAPTERS));
    return axios
      .get(`${LOCAL_BASE_URL}/getChapters/${subjectId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.GET_CHAPTERS_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_CHAPTERS_FAILED, error));
      });
  };

export const getTopics = (chapterId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_TOPICS));
    return axios
      .get(`${LOCAL_BASE_URL}/getTopics/${chapterId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.GET_TOPICS_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_TOPICS_FAILED, error));
      });
  };

export const getSubtopics = (topicId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_SUBTOPICS));
    return axios
      .get(`${LOCAL_BASE_URL}/getSubtopics/${topicId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(actionHandlers.handleResponse(actionTypes.GET_SUBTOPICS_SUCCESS, response));
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_SUBTOPICS_FAILED, error));
      });
  };
