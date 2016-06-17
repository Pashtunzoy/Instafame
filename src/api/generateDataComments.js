module.exports = function () {
  var faker = require('faker');
  var _ = require('lodash');
  var posts = require('./posts.js');
  var comments = {"comments":[]};
  // console.log(comments);
  let num = 0;
  for (var i = 0; i < posts.length; i++) {
    codeSecret(posts[i].id, num);
  }

  function codeSecret(id, num) {
    var rand = Math.floor(Math.random()*10) + 1;
    comments.comments.push(randComments(rand, id, num));
  }
  function randComments(rand, id, num) {
    return _.times(rand, function () {
      var randomUserName = faker.name.firstName() + " " + faker.name.lastName();
      return {
        id: num++,
        text: faker.lorem.sentence(),
        user: randomUserName.split(' ').join('').toLowerCase(),
        postId: id
      }
    })
  }
  return comments;
}

// import posts from './api/posts';
// import comments from './api/comments';

// for (let key in comments) {
//   for (let i = 0; i < posts.length; i++) {
//     if (posts[i].code === key) {
//       for (let j = 0; j < comments[key].length; j++) {
//         console.log(`Caption: ${posts[i].display_src}`);
//         console.log(`Comment Number ${j+1}: ${comments[key][j].text}`);
//       }
//     }
//   }
// }
