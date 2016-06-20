import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as signUpActions from '../actions/signUpActions';
import { Link } from 'react-router';


class SignUp extends React.Component {
  handleClick(event) {
    event.preventDefault();
    const email = this.refs.email;
    const password = this.refs.password;
    const creds = { email: email.value.trim(), password: password.value.trim() };
    this.props.dispatch(signUpActions.signUpUser(creds));
  }
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          Email:<br/>
          <input type="email" ref="email" name="email" placeholder="Email" />
          <br/>
          Password:<br/>
          <input type="password" ref="password" name="password" placeholder="Password" />
          <br/>
          <button onClick={(e) => this.handleClick(e)}>SignUp</button>
        </form>
      </div>
    );
  }
}


SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired
};


function mapStateToProps(state) {

  return {
  };
}


export default connect(mapStateToProps)(SignUp);
