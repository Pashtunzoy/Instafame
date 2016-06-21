import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Login from './Login';
import Logout from './Logout';
import * as loginActions from '../actions/loginActions';
import * as logoutActions from '../actions/logoutActions';

class Navbar extends React.Component {
  render () {
    const { dispatch, isAuthenticated, errorMessage } = this.props;
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-form">

            {!isAuthenticated &&
              <Login
                errorMessage={errorMessage}
                onLoginClick={creds => dispatch(loginActions.loginUser(creds))}
              />
            }

            

          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

export default Navbar;
