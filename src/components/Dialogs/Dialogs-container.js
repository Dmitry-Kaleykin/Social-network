//import React from 'react';
import Dialogs from './Dialogs';
import {addMessage} from '../../redux/messages-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getDialogsDataState, getMessagesDataState } from '../../redux/selectors/messages-selectors';

function mapStateToProps (state) {
    return {
        dialogsData: getDialogsDataState(state),
        messagesData: getMessagesDataState(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        addMessage,
    }),
    withAuthRedirect,
)(Dialogs);
