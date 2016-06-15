import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const PostDisplay = ({code, display_src, caption, id, likes, commentLength, incrementLikes, i, post}) => {
  return (
    <div className="images">
      <figure>
        <Link to={`/post/${code}`}><img src={display_src} /></Link>
        <figcaption>{caption}</figcaption>
      </figure>
      <div className="buttons">
        <button className="comment-length">{commentLength.length}</button>
        <button className="likes" onClick={(e) => incrementLikes(e, post, i)}>{likes}</button>
      </div>
    </div>
  );
};

PostDisplay.propTypes = {
  code: PropTypes.string.isRequired,
  display_src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  commentLength: PropTypes.array.isRequired
};

export default PostDisplay;
