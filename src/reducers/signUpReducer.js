import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function signUp(state = initialState.signUp, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        signedUp: false,
        user: action.creds
      });
    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        signedUp: true,
        errorMessage: ''
      });
    case types.SIGNUP_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        signedUp: false,
        errorMessage: action.message
      });
    default:
      return state;
  }
}
