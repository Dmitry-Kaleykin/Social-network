import React from 'react';
import s from './Writter.module.css';
import Post from '../Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLength40, minLength2 } from '../../../assets/validators/FieldLevelValidationForm';
import {FormComponent} from '../../common/FormControl/Forms';

const Textarea = FormComponent("textarea");

function AddPostForm (props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                       name="newPostText"
                       validate={[required, maxLength40, minLength2]}
                       label="pass your post text" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: "addPost"})(AddPostForm);

function Writter (props) {
    let writterItem = props.writterData.map( post => <Post message={post.message} likesCount={post.likesCount}/> );

    function onAddPost (formData) {
        props.addPost(formData.newPostText);
    }
    
    return(
        <div className={s.writter}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onAddPost} />
            <div className={s.posts}>               
                { writterItem }
            </div>
        </div>
    )
}

export default Writter;