import { combineReducers } from 'redux';

import courses from '../reducer/getCoursesData';
import addVideo from '../reducer/addVideo';

const rootReducer = combineReducers({
  courses,
  addVideo,
});

export default rootReducer;
