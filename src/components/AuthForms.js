import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as signUpActions from '../actions/signUpActions';
import * as loginActions from '../actions/loginActions';
import * as logoutActions from '../actions/logoutActions';


class AuthForms extends React.Component {
  handleSignUpClick(event) {
    event.preventDefault();
    const email = this.refs.email;
    const password = this.refs.password;
    const creds = { email: email.value.trim(), password: password.value.trim() };
    this.props.dispatch(signUpActions.signUpUser(creds));
  }

  handleLogInClick(event) {
    event.preventDefault();
    const email = this.refs.email;
    const password = this.refs.password;
    const creds = { email: email.value.trim(), password: password.value.trim() };
    this.props.dispatch(loginActions.loginUser(creds));
  }
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;
    return (
    <div>
        <div id="sign-in">
          <h2>SignIn</h2>
          <form>
          <input type='text' ref='email' className="form-control" style={{ marginRight: '5px' }} placeholder='Email'/>
          <input type='password' ref='password' className="form-control" style={{ marginRight: '5px' }} placeholder='Password'/>
          <button onClick={(event) => this.handleLogInClick(event)} className="btn btn-primary">
            <Link to="/">Login</Link>
          </button>
          </form>
          {errorMessage &&
            <p style={{color:'red'}}>{errorMessage}</p>
          }
        </div>
        <div id="sign-up">
        <h2>Sign Up</h2>
        <form>
          Email:<br/>
          <input type="email" ref="email" name="email" placeholder="Email" />
          <br/>
          Password:<br/>
          <input type="password" ref="password" name="password" placeholder="Password" />
          <br/>
          <Link to="/"><button onClick={(e) => this.handleSignUpClick(e)}>SignUp</button></Link>
        </form>
      </div>
    </div>
    );
  }
}


AuthForms.propTypes = {
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


export default connect(mapStateToProps)(AuthForms);
