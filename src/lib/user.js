import headers from './headers';
import axios from 'axios';
import { LOCAL_BASE_URL } from '../shared/baseurl';

export const LOGIN = async (payload) => {
  try {
    const response = await axios.post(
      `${LOCAL_BASE_URL}/login`,
      payload,
      headers()
    );
    return response;
  } catch (e) {
    console.log('error', e);
  }
};

export const SIGN_UP = async (payload) => {
  try {
    const response = await axios.post(
      `${LOCAL_BASE_URL}/signup`,
      payload,
      headers()
    );
    return response;
  } catch (e) {
    console.log('error', e);
  }
};

export const REGISTER = async (payload) => {
  try {
    const response = await axios.post(
      `${LOCAL_BASE_URL}/register`,
      {
        userInfo: payload,
      },
      headers()
    );
    return response;
  } catch (e) {
    console.log('error', e);
  }
};
