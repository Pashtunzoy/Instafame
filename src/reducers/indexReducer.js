import { combineReducers } from 'redux';
import posts from './postsReducer';
import comments from './commentsReducer';

const rootReducer = combineReducers({
  posts,
  comments
});

export default rootReducer;
