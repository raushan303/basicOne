import { combineReducers } from 'redux';

import courses from '../reducer/getCoursesData';
import addVideo from '../reducer/addVideo';
import user from '../reducer/user';
import userDetails from '../reducer/userDetails';
import subtopicsByAuthor from '../reducer/getSubtopicsByAuthor';

const rootReducer = combineReducers({
  courses,
  addVideo,
  user,
  userDetails,
  subtopicsByAuthor,
});

export default rootReducer;
