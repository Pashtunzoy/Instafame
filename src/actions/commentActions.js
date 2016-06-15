import * as types from './actionTypes';
import CommentsApi from '../api/mockCommentsApi';


export function loadCommentsSuccess(comments) {
  return { type: types.LOAD_COMMENTS_SUCCESS, comments};
}

export function createCommentSuccess(username, comment, keyCode) {
  return { type: types.CREATE_COMMENT_SUCCESS, username, comment, keyCode};
}

export function createComment(username, comment, keyCode) {
  return(dispatch, getState) => {
    dispatch(createCommentSuccess(username, comment, keyCode));
    console.log(getState());
    // return fetch(`http://localhost:3001/${keyCode}`, {
    //   method: 'POST',
    //   headers: new Headers({
    //    'Content-Type': 'text'
    //   }),
    //   data: JSON.stringify(getState().comments[keyCode])
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(err =>
    //   console.log(`There was error while creating Comment: ${err}`)
    // );
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
    return fetch(`http://localhost:3001/db`)
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
//       console.log(getState());
//     }).catch((err) => {
//       throw(err);
//     });
//   };
// }
