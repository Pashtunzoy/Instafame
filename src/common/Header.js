import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../actions/loginActions';
import { Link } from 'react-router';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';


class Header extends React.Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;
    return (
      <header>
        <Link to="/"><h5>Home</h5></Link>
          <Navbar
            isAuthenticated={isAuthenticated}
            errorMessage={errorMessage}
            dispatch={dispatch}
          />
      </header>
    );
  }
}


Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userInfo: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};


function mapStateToProps(state) {
  const { userInfo, auth } = state;
  const { isAuthenticated, errorMessage } = auth;

  return {
    userInfo,
    isAuthenticated,
    errorMessage
  };
}


export default connect(mapStateToProps)(Header);
