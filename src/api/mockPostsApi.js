import delay from './delay';
import posts from './posts';
class PostsApi {
  static getAllPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], posts));
      }, delay);
    });
  }

  static incrementLikes(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.map(post => {
          if (post.id === postId) {
            resolve(Object.assign({}, post));
          }
        })
      }, delay);
    });
  }
}

export default PostsApi;
