import * as types from '../actions/actionTypes';
import initialState from './initialState';

function postComment(state = [], action) {
  return [...state, {
    id: state.length + 1,
    text: action.comment,
    user: action.username,
    postId: parseInt(action.postId)
  }];
}

export default function postsReducer(state = initialState.comments, action) {
  switch (action.type) {
    case types.LOAD_COMMENTS_SUCCESS:
      return action.comments;
    case types.CREATE_COMMENT_SUCCESS:
      return postComment(state, action)
    case types.DELETE_COMMENT_SUCCESS:
      return state.filter((comment) => comment.id !== action.id);
    default:
      return state;
  }
}
