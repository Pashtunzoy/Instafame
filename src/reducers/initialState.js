export default {
  posts: [],
  comments: [],
  auth: { isFetching: false, isAuthenticated: localStorage.getItem('id_token') ? true : false},
  profile: {
            isFetching: false,
            user: '',
            authenticated: false
          },
  signUp: {
            isFetching: false,
            user: '',
            signedUp: false
          }
};
