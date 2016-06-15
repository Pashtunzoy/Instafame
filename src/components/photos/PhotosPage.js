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
      comments: Object.assign({}, props.comments)
    };

    this.incrementLikes = this.incrementLikes.bind(this);
  }

  incrementLikes(event, post, i) {
    event.preventDefault();
    this.props.actions.incrementLikes(post, i)
      .then(() => {
        console.log('Liked');
      })
      .catch((err) => {
        toastr.error(err);
      });
  }

  render () {
    let posts = this.state.posts;
    let comments = this.props.comments;
    return (
      <div className="main">
      {
        this.props.posts.map((post, i) => {
          for(let key in comments) {
            if(key === post.code) {
              return <PostDisplay
                      key={i}
                      {...post}
                      commentLength={comments[key]} incrementLikes={this.incrementLikes}
                      i={i} post={post}
                    />;
            }
          }
        })
      }
      </div>
    );
  }
}

PhotoFrame.propTypes = {
  posts: PropTypes.array.isRequired,
  comments: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoFrame);
