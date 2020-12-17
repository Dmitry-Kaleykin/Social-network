import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, 
         getUserProfileThunkCreator,
         getUserStatusThunkCreator,
         updateUserStatusThunkCreator, } from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
//import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getProfileState, getStatusState } from '../../redux/selectors/profile-selectors';
import { getCurrentUserIdState, getIsAuthState } from '../../redux/selectors/auth-selectors';

class ProfileContainerClass extends React.Component {

  componentDidMount () {
    let userId = this.props.match.params.userId || this.props.currentUserId;
    this.props.getUserProfileThunkCreator(userId);
    this.props.getUserStatusThunkCreator(userId);
  }
  
  render () {
    if (!this.props.match.params.userId && !this.props.currentUserId) {
      return <Redirect to="/Login" />
    }

    return (
      <div>
        <Profile {...this.props} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return ({
      profile: getProfileState(state),
      status: getStatusState(state),
      currentUserId: getCurrentUserIdState(state),
      isAuth: getIsAuthState(state),
  })
}

export default compose(
  connect(mapStateToProps, { 
    setUserProfile,
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
  }),
  withRouter,
  //withAuthRedirect,
)(ProfileContainerClass);