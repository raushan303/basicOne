import headers from './headers';
import axios from 'axios';
import { LOCAL_BASE_URL } from '../shared/baseurl';

export const ADD_LEARN = async (payload) => {
  try {
    const response = await axios.post(
      `${LOCAL_BASE_URL}/addLearn`,
      payload,
      headers()
    );
    return response;
  } catch (e) {
    console.log('error', e);
  }
};
