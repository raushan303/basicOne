import axios from 'axios';
import * as actionTypes from '../actionTypes/courses';
import * as actionHandlers from '../helpers/actionHandlers';
import headers from '../helpers/headers';
import { LOCAL_BASE_URL } from '../../shared/baseurl';

export const getSubjectStat = (subject) =>
    function (dispatch) {
        dispatch(actionHandlers.tryHandle(actionTypes.GET_SUBJECT_STAT));
        return axios
            .get(`${LOCAL_BASE_URL}/getSubjectStat/${subject}`, headers())
            .then((response) => {
                if (response) {
                    dispatch(actionHandlers.handleResponse(actionTypes.GET_SUBJECT_STAT_SUCCESS, response));
                }
            })
            .catch((error) => {
                dispatch(actionHandlers.handleError(actionTypes.GET_SUBJECT_STAT_FAILED, error));
            });
    };

export const getSubjects = () =>
    function (dispatch) {
        dispatch(actionHandlers.tryHandle(actionTypes.GET_SUBJECTS));
        return axios
            .get(`${LOCAL_BASE_URL}/getSubjects`, headers())
            .then((response) => {
                if (response) {
                    dispatch(actionHandlers.handleResponse(actionTypes.GET_SUBJECTS_SUCCESS, response));
                }
            })
            .catch((error) => {
                dispatch(actionHandlers.handleError(actionTypes.GET_SUBJECTS_FAILED, error));
                console.log('my name is raushan')
            });
    };

export const getChapters = (subject) =>
    function (dispatch) {
        dispatch(actionHandlers.tryHandle(actionTypes.GET_CHAPTERS));
        return axios
            .get(`${LOCAL_BASE_URL}/getChapters/${subject}`, headers())
            .then((response) => {
                if (response) {
                    dispatch(actionHandlers.handleResponse(actionTypes.GET_CHAPTERS_SUCCESS, response));
                }
            })
            .catch((error) => {
                dispatch(actionHandlers.handleError(actionTypes.GET_CHAPTERS_FAILED, error));
            });
    };

export const getTopics = (subject, chapter) =>
    function (dispatch) {
        dispatch(actionHandlers.tryHandle(actionTypes.GET_TOPICS));
        return axios
            .get(`${LOCAL_BASE_URL}/getTopics/${subject}/${chapter}`, headers())
            .then((response) => {
                if (response) {
                    dispatch(actionHandlers.handleResponse(actionTypes.GET_TOPICS_SUCCESS, response));
                }
            })
            .catch((error) => {
                dispatch(actionHandlers.handleError(actionTypes.GET_TOPICS_FAILED, error));
            });
    };

export const getSubtopics = (subject, chapter, topic) =>
    function (dispatch) {
        dispatch(actionHandlers.tryHandle(actionTypes.GET_SUBTOPICS));
        return axios
            .get(`${LOCAL_BASE_URL}/getSubtopics/${subject}/${chapter}/${topic}`, headers())
            .then((response) => {
                if (response) {
                    dispatch(actionHandlers.handleResponse(actionTypes.GET_SUBTOPICS_SUCCESS, response));
                }
            })
            .catch((error) => {
                dispatch(actionHandlers.handleError(actionTypes.GET_SUBTOPICS_FAILED, error));
            });
    };
