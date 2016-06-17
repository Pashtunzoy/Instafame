import React, { PropTypes } from 'react';
import PostsApi from '../../api/mockPostsApi.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as postActions from '../../actions/postActions';
import PostDisplay from './PostDisplay';

class PhotoFrame extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      posts: [...props.posts],
      comments: [...props.comments]
    };

    this.incrementLikes = this.incrementLikes.bind(this);
  }

  incrementLikes(event, post, i, id) {
    event.preventDefault();
    this.props.actions.incrementLikes(post, i, id)
      .then(() => {
        console.log('Liked');
      })
      .catch((err) => {
        toastr.error(err);
      });
  }

  render () {
    let posts = this.props.posts;
    let comments = this.props.comments;
    return (
      <div className="main">
       {
          posts.map((post, i) => {
             return <PostDisplay
                     key={i}
                     {...post}
                     comments={comments}
                     incrementLikes={this.incrementLikes}
                     comLength={comments.filter(comment => comment.postId === post.id).length}
                     i={i}
                     post={post}
                   />;
          })
       }
      </div>
    );
  }
}

PhotoFrame.propTypes = {
  posts: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let comments = [];
  if (state.comments.length > 0) {
    comments = state.comments;
  }
  return {
    posts: state.posts,
    comments: comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoFrame);
