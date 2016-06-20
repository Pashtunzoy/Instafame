import React, { PropTypes } from 'react';

class Login extends React.Component {
  handleClick(event) {
    event.preventDefault();
    const email = this.refs.email;
    const password = this.refs.password;
    const creds = { email: email.value.trim(), password: password.value.trim() };
    this.props.onLoginClick(creds);
  }
  render () {
    const { errorMessage } = this.props;
    return (
      <div>
        <form id="login-form">
          <input type='text' ref='email' className="form-control" style={{ marginRight: '5px' }} placeholder='Email'/>
          <input type='password' ref='password' className="form-control" style={{ marginRight: '5px' }} placeholder='Password'/>
          <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
            Login
          </button>
        </form>
        {errorMessage &&
          <p style={{color:'red'}}>{errorMessage}</p>
        }
      </div>
    );
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default Login;
