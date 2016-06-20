import * as types from './actionTypes';
import { CALL_API } from '../middleware/api';


export function fetchProfileInfo() {
  return {
    [CALL_API]: {
      endpoint: 'profile',
      authenticated: true,
      types: [types.PROFILE_REQUEST, types.PROFILE_SUCCESS, types.PROFILE_FAILURE]
    }
  }
}
