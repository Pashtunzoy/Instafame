import { combineReducers } from 'redux';
import posts from './postsReducer';
import comments from './commentsReducer';
import auth from './authReducer';
import profile from './profileReducer';

const rootReducer = combineReducers({
  posts,
  comments,
  auth,
  profile
});

export default rootReducer;
