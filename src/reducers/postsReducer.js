import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function postsReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    case types.INCREMENT_LIKE_SUCCESS:
      return state.map((post, i) => {
          if (i === action.i) {
            return Object.assign({}, post, { likes: post.likes + 1 });
          }
          return post;
      });
    default:
      return state;
  }
}
