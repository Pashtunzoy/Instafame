import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../actions/loginActions';
import * as logoutActions from '../actions/logoutActions';
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
          {isAuthenticated &&
            <div>
              <Link to="/profile">
                <h5>Profile</h5>
              </Link>
              <Link to="/auth" onClick={() => dispatch(logoutActions.logoutUser())}>
                <h5>SignOut</h5>
              </Link>
            </div>
          }
          {!isAuthenticated &&
            <Link to="/auth">
              <h5>SignUp/Login</h5>
            </Link>
          }
      </header>
    );
  }
}

// <Navbar
//   isAuthenticated={isAuthenticated}
//   errorMessage={errorMessage}
//   dispatch={dispatch}
// />


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
