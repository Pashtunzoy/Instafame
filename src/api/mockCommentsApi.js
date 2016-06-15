import delay from './delay';
import comments from './comments';


class CommentsApi {
  static getAllComments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, comments));
      }, delay);
    });
  }

  static createComment(username, comment, keyCode) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (comments[keyCode]) {
          comments[keyCode].push({
            text: comment,
            user: username
          });
          console.log(comments[keyCode]);
          resolve(Object.assign([], comments[keyCode]))
        }
      }, delay);
    });
  }
}

export default CommentsApi;
