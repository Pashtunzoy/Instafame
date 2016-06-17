import * as types from './actionTypes';
import PostsApi from '../api/mockPostsApi';
import $ from 'jquery';

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts};
}

export function incrementLikeSuccess(i) {
  return { type: types.INCREMENT_LIKE_SUCCESS, i };
}

export function loadPosts() {
  return function (dispatch) {
    return fetch(`http://localhost:3000/posts`).then(response => {
      return response.json();
    }).then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch((err) => {
      throw(err);
    });
  };
}


export function incrementLikes(post, i, id) {
    return (dispatch, getState) => {
        dispatch(incrementLikeSuccess(i));
        return fetch(`http://localhost:3000/posts/${id}`, {
            method: 'PUT',
            headers: new Headers({
             'Content-Type': 'application/json'
            }),
            body: JSON.stringify(getState().posts[i])
        }).then((data) => {
            return data.json();
        }).then((data) => {
          return data;
        }).catch((err) => {
          console.log(`There was error while incrementing Likes: ${err}`);
        });
    }
}



// LOCAL INCREMENT LIKE MOCK API CALL

// export function incrementLikes(postId, i) {
//   return function (dispatch) {
//     return PostsApi.incrementLikes(postId).then((post) => {
//       console.log(fetchData());
//       dispatch(incrementLikeSuccess(post, i));
//       // console.log(post);
//     }).catch((err) => {
//       throw(err);
//     });
//   };
// }
