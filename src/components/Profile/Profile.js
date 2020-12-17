import React from 'react';
//import s from './Profile.module.css';
import WritterContainer from './Writter/Writter-container';
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile (props) {

  return (
    <div>
      <ProfileInfo {...props} />
      <WritterContainer />
    </div>
  )
}

export default Profile;