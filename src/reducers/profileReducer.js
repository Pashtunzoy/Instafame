import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function profile(state = initialState.profile, action) {
  switch (action.type) {
    case types.PROFILE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.PROFILE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.response,
        authenticated: action.authenticated || false
      });
    case types.PROFILE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}
