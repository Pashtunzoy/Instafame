import React, { PropTypes } from 'react';

const Comment = ({text, user}) => {
  return (
    <div>
      <p className="user-name">@{user}</p>
      <p className="comment-text">{text}</p>
    </div>
  );
};


Comment.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};
export default Comment;
