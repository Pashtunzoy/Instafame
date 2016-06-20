import * as types from './actionTypes';



export function requestLogin(creds) {
  return {
    type: types.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

export function receiveLogin(user) {
  return {
    type: types.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.token
  };
}

export function loginError(message) {
  return {
    type: types.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}



export function loginUser(creds) {

  let config = {
    mode: 'cors',
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `email=${creds.email}&password=${creds.password}`
  };


  return dispatch => {
    dispatch(requestLogin(creds));
    return fetch('http://localhost:4000/api/authenticate', config)
    .then(response =>{
      return response.json()
      .then(user => ({ user, response }))}
    ).then(({ user, response }) =>  {
      if(!user.success) {
        dispatch(loginError(user.message));
        return Promise.reject(user);
      } else {
        localStorage.setItem('id_token', user.token);
        dispatch(receiveLogin(user));
      }
    });
  };
}
