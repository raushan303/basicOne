import { combineReducers } from 'redux';

import courses from '../reducer/courses';

const rootReducer = combineReducers({
    courses,
});

export default rootReducer;
