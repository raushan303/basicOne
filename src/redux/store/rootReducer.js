import { combineReducers } from 'redux';

import courses from '../reducer/getCoursesData';
import addVideo from '../reducer/addVideo';
import user from '../reducer/user';
import userDetails from '../reducer/userDetails';
import subtopicsByAuthor from '../reducer/getSubtopicsByAuthor';
import coursesStats from '../reducer/getCousesStat';
import comments from '../reducer/getComments';

const rootReducer = combineReducers({
  courses,
  addVideo,
  user,
  userDetails,
  subtopicsByAuthor,
  coursesStats,
  comments,
});

export default rootReducer;
