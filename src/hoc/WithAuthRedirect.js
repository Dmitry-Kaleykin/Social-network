import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToPropsWithAuth (state) {
    return ({
            isAuth: state.header.isAuth,
    })
}

export function withAuthRedirect (Component) {
    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) return <Redirect to="/Login" />;
            return <Component {...this.props} />;
        }
    }

    let ConnectedRedirectComponent = connect (mapStateToPropsWithAuth)(RedirectComponent);

    return ConnectedRedirectComponent;
}