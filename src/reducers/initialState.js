export default {
  posts: [],
  comments: [],
  auth: { isFetching: false, isAuthenticated: localStorage.getItem('id_token') ? true : false}
};
