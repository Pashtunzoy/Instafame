import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header>
      <Link to="/"><h5>Home</h5></Link>
    </header>
  );
};

export default Header;
