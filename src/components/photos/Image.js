import React, { PropTypes } from 'react';

const Image = ({ display_src }) => {
  return (
    <div className="image">
      <img src={display_src} />
    </div>
  );
};

export default Image;
