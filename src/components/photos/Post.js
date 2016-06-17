import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import toastr from 'toastr';
import * as commentActions from '../../actions/commentActions';
import Comment from './Comment';
import Image from './Image';

class Post extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      comments: [...props.comments],
      post: Object.assign({}, props.post),
      username: '',
      comment: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.createComment = this.createComment.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // if (this.state.post.code !== nextProps.post.code || nextProps.comments.length > 0) {
      this.setState({
        comments: [...nextProps.comments],
        post: Object.assign({}, nextProps.post
      )});
    // }
  }

  onInputChange() {
    const username = this.refs.username.value;
    const comment = this.refs.comment.value;
    this.setState({username, comment});
  }

  createComment() {
    this.props.actions.createComment(this.state.username, this.state.comment, this.props.postId).then(() => {
      console.log('Comment saved');
    }).catch((err) => {
      console.log(`There was an error in createComment saving action: ${err}`);
    })
  }
  render () {
    return (
      <div className="main">
        <div className="single-post">
            <Image {...this.state.post}/>
          <div className="comments">
            <figcaption>{this.state.post.caption}</figcaption>
            <div className="all-comments">
              {
                this.state.comments.map((comment, i) => {
                  return <Comment {...comment} key={i}/>;
                })
              }
            </div>
            <div className="input-area">
              Username:
              <input
                type="text"
                ref="username"
                value={this.state.username}
                onChange={this.onInputChange}
                placeholder="Enter your username"/>

              Comment:
              <input type="text"
                ref="comment"
                value={this.state.comment}
                onChange={this.onInputChange}
                placeholder="Enter your comment"/>
              <button onClick={() => this.createComment()}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function getPostByCode(posts, id) {
  const post = posts.filter(post => post.id == id);
  if (post) return post[0];
  return null;
}

function getCommentsById(comments, id) {
  let arr = [];
  comments.map(comment => {
    if (comment.postId === parseInt(id)) {
      arr.push(comment);
    }
  });
  return arr;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.params.id;
  let post = {code: '', caption: '', likes: '', id: '', display_src: ''};
  if (id && state.posts.length > 0) {
    post = getPostByCode(state.posts, id);
  }

  let comments = [];
  if (state.comments.length > 0) {
    comments = getCommentsById(state.comments, id);
  }

  return {
    post: post,
    comments: comments,
    postId: id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(commentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
