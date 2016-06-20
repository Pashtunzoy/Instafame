import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as profileActions from '../actions/profileActions';
import { Link } from 'react-router';

class Profile extends React.Component {
  render () {
    const { dispatch, isAuthenticated, user } = this.props;
    console.log(user);
    return (
      <div>
        <h1>Profile</h1>
          {isAuthenticated &&
            <div className="col-sm-3">
              <button onClick={() => dispatch(profileActions.fetchProfileInfo())} className="btn btn-primary">
                Go to Profile
              </button>
            </div>
          }

          {user && isAuthenticated &&
            <div>
              <span className="label label-danger">User Profile</span>
              <hr/>
              <blockquote>
                {user}
              </blockquote>
            </div>
          }
      </div>
    );
  }
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.string
};

function mapStateToProps(state) {
  console.log(state);
  const { profile, auth } = state;
  const { user, authenticated } = profile;
  const { isAuthenticated, errorMessage } = auth;

  return {
    user,
    isAuthenticated,
    errorMessage
  };
}

export default connect(mapStateToProps)(Profile);
