import * as types from './actionTypes';



export function signUpRequest(creds) {
  return {
    type: types.SIGNUP_REQUEST,
    isFetching: true,
    signedUp: false,
    creds
  };
}

export function signUpSuccessfull() {
  return {
    type: types.SIGNUP_SUCCESS,
    isFetching: false,
    signedUp: true,
    errorMessage: ''
  };
}

export function signUpFailer(message) {
  return {
    type: types.SIGNUP_FAILURE,
    isFetching: false,
    signedUp: false,
    message
  };
}



export function signUpUser(creds) {

  let config = {
    mode: 'cors',
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `email=${creds.email}&password=${creds.password}`
  };


  return (dispatch, getState) => {
    dispatch(signUpRequest(creds));
    console.log(getState());
    return fetch('http://localhost:4000/api/register', config)
    .then(response =>{
      return response.json()
      .then(user => ({ user, response }))}
    ).then(({ user, response }) =>  {
      if(!user.success) {
        dispatch(signUpFailer(user.message));
        return Promise.reject(user);
      } else {
        // localStorage.setItem('id_token', user.token);
        dispatch(signUpSuccessfull());
      }
    });
  };
}
