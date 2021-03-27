import axios from 'axios';
import * as actionTypes from '../actionTypes/getSubtopicsByAuthor';
import * as actionHandlers from '../helpers/actionHandlers';
import headers from '../helpers/headers';
import { LOCAL_BASE_URL } from '../../shared/baseurl';

export const getSubtopicsByGrade = (authorId, grade) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_SUBTOPICS_BY_GRADE));
    return axios
      .get(`${LOCAL_BASE_URL}/getSubtopicsByGrade/${authorId}/${grade}`, headers())
      .then((response) => {
        if (response) {
          dispatch(
            actionHandlers.handleResponse(actionTypes.GET_SUBTOPICS_BY_GRADE_SUCCESS, response)
          );
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_SUBTOPICS_BY_GRADE_FAILED, error));
      });
  };

export const getSubtopicsBySubject = (authorId, subjectId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_SUBTOPICS_BY_SUBJECT));
    return axios
      .get(`${LOCAL_BASE_URL}/getSubtopicsBySubject/${authorId}/${subjectId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(
            actionHandlers.handleResponse(actionTypes.GET_SUBTOPICS_BY_SUBJECT_SUCCESS, response)
          );
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_SUBTOPICS_BY_SUBJECT_FAILED, error));
      });
  };

export const getSubtopicsByChapter = (authorId, chapterId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_SUBTOPICS_BY_CHAPTER));
    return axios
      .get(`${LOCAL_BASE_URL}/getSubtopicsByChapter/${authorId}/${chapterId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(
            actionHandlers.handleResponse(actionTypes.GET_SUBTOPICS_BY_CHAPTER_SUCCESS, response)
          );
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_SUBTOPICS_BY_CHAPTER_FAILED, error));
      });
  };

export const getSubtopicsByTopic = (authorId, topicId) =>
  function (dispatch) {
    dispatch(actionHandlers.tryHandle(actionTypes.GET_SUBTOPICS_BY_TOPIC));
    return axios
      .get(`${LOCAL_BASE_URL}/getSubtopicsByTopic/${authorId}/${topicId}`, headers())
      .then((response) => {
        if (response) {
          dispatch(
            actionHandlers.handleResponse(actionTypes.GET_SUBTOPICS_BY_TOPIC_SUCCESS, response)
          );
        }
      })
      .catch((error) => {
        dispatch(actionHandlers.handleError(actionTypes.GET_SUBTOPICS_BY_TOPIC_FAILED, error));
      });
  };
