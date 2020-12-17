import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {  getAuthThunkCreator, logoutThunkCreator } from './../../redux/auth-reducer';
import { getIsAuthState, getLoginState } from '../../redux/selectors/auth-selectors';
//import s from './Header.module.css';

class HeaderContainer extends React.Component {

    render () {
        return (
            <Header {...this.props} />
        )
    }
}

function mapStateToProps (state) {
    return {
        isAuth: getIsAuthState(state),
        login: getLoginState(state),
    }
}

export default connect( mapStateToProps, {
    getAuthThunkCreator,
    logoutThunkCreator,
})(HeaderContainer);