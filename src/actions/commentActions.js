import * as types from './actionTypes';
import CommentsApi from '../api/mockCommentsApi';


export function loadCommentsSuccess(comments) {
  return { type: types.LOAD_COMMENTS_SUCCESS, comments};
}

export function createCommentSuccess(username, comment, postId) {
  return { type: types.CREATE_COMMENT_SUCCESS, username, comment, postId};
}

export function deleteCommentSuccess(id, comment, user, postId) {
  return { type: types.DELETE_COMMENT_SUCCESS, id, comment, user, postId};
}

export function createComment(username, comment, postId) {
  return(dispatch, getState) => {
    dispatch(createCommentSuccess(username, comment, postId));
    let comArr = getState().comments[getState().comments.length - 1];
    return fetch(`http://localhost:3001/comments`, {
      method: 'POST',
      headers: new Headers({
       'Content-Type': 'application/json'
      }),
      body: JSON.stringify(comArr)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
    })
    .catch(err =>
      console.log(`There was an error while creating a comment: ${err}`)
    );
  }
}


export function deleteComment(id, comment, user, postId) {
  return(dispatch, getState) => {
    return fetch(`http://localhost:3001/comments/${id}`, {
      method: 'DELETE',
      headers: new Headers({
       'Content-Type': 'application/json'
      }),
    })
    .then()
    .then(() => {
      dispatch(deleteCommentSuccess(id, comment, user, postId));
    })
    .catch(err =>
      console.log(`There was an error while creating a comment: ${err}`)
    );
  }
}

// export function createComment(username, comment, keyCode) {
//   return(dispatch, getState) => {
//     return CommentsApi.createComment(username, comment, keyCode).then((data) => {
//       dispatch(createCommentSuccess(username, comment, keyCode));
//     }).catch((err) => {
//       console.log(`There was an error in creating comment: `, err);
//     });
//   }
// }


export function loadComments(dispatch) {
  return (dispatch, getState) => {
    return fetch(`http://localhost:3001/comments`)
      .then(res => {
        return res.json()
      })
      .then((comments) => {
        dispatch(loadCommentsSuccess(comments));
      }).catch((err) => {
        console.log('Got error while getting comments: ', err);
      });
  }
}



// LOCAL COMMENT MOCK API CALL!
//
// export function loadComments() {
//   return function (dispatch, getState) {
//     return CommentsApi.getAllComments().then(comments =>{
//       dispatch(loadCommentsSuccess(comments));
//     }).catch((err) => {
//       throw(err);
//     });
//   };
// }
