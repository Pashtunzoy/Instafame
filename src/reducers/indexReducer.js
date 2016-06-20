import { combineReducers } from 'redux';
import posts from './postsReducer';
import comments from './commentsReducer';
import signUp from './signUpReducer';
import auth from './authReducer';
import profile from './profileReducer';

const rootReducer = combineReducers({
  posts,
  comments,
  signUp,
  auth,
  profile
});

export default rootReducer;
