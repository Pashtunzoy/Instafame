import * as types from '../actions/actionTypes';
import initialState from './initialState';

function postComment(state = [], action) {
  return [...state,{
    user: action.username,
    text: action.comment
  }];
}

export default function postsReducer(state = initialState.comments, action) {
  switch (action.type) {
    case types.LOAD_COMMENTS_SUCCESS:
      return Object.assign({}, state, action.comments);
    case types.CREATE_COMMENT_SUCCESS:
      // if (state[action.keyCode]) {
      //   return Object.assign({}, state,
      //     {
      //       [action.keyCode]: [...state[action.keyCode],
      //       {
      //         text: action.comment,
      //         user: action.username
      //       }]
      //     }
      //   );
      // }
      // postComment(state[action.keyCode], action)
      return {
        ...state,
        [action.keyCode]: [...state[action.keyCode], {
          text: action.comment,
          user: action.username
        }]
      };
    default:
      return state;
  }
}
