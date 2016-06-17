import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const PostDisplay = ({code, display_src, caption, id, likes,comLength, comments, incrementLikes, i, post}) => {
  return (
    <div className="images">
      <figure>
        <Link to={`/post/${id}`}><img src={display_src} /></Link>
        <figcaption>{caption}</figcaption>
      </figure>
      <div className="buttons">
        <button className="comment-length">{comLength}</button>
        <button className="likes" onClick={(e) => incrementLikes(e, post, i, id)}>{likes}</button>
      </div>
    </div>
  );
};

PostDisplay.propTypes = {
  code: PropTypes.string.isRequired,
  display_src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired
};

export default PostDisplay;
