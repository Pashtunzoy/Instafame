import React, { PropTypes } from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.deleteComment(this.props.id, this.props.text, this.props.user, this.props.postId);
  }
  render() {
    const {user, text} = this.props;
    return (
      <div>
        <span className="delete-comment-show" onClick={(e) => this.handleDelete()}>&times;</span>
        <p className="user-name">@{user}</p>
        <p className="comment-text">{text}</p>
      </div>
    );
  }
}


Comment.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};
export default Comment;
