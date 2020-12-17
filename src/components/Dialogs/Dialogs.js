import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';
import {FormComponent} from '../common/FormControl/Forms';
import { required, maxLength40, minLength2 } from '../../assets/validators/FieldLevelValidationForm';

const Textarea = FormComponent("textarea");

function dialogForm (props) {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Textarea} 
                       name={"newPostText"}
                       validate={[required, maxLength40, minLength2]}
                       label="pass your message text" />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

let DialogReduxForm = reduxForm({form: "newDialogText"})(dialogForm);
 
function Dialogs (props) {

    let dialogElements = props.dialogsData.map( d => <Dialog name={d.name} id={d.id} />);

    let messagesElements = props.messagesData.map( m => <Message message={m.message} id={m.id} avatar={m.avatar} />);

    function onAddMessage (formData) {
        props.addMessage(formData.newPostText);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <DialogReduxForm onSubmit={onAddMessage} />
        </div>
    )
}

export default Dialogs;