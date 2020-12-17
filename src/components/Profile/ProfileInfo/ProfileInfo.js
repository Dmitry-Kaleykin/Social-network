import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus';

function ProfileInfo (props) {

    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    return (
        <div>
            {/* <div>
                <img className={s.backgroundAva} src="https://www.interjet.com/images/img.jpg" alt="img"/>
            </div> */}
            <div className={s.description}>
                <img className={s.ava} src={props.profile.photos.large || "https://www.interjet.com/images/img.jpg" } alt="img"/>
                <ProfileStatusWithHooks  status={props.status} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator} />
            </div>
        </div>
    )
}

export default ProfileInfo;