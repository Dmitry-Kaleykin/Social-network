import React from 'react';
//import s from './ProfileInfo.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

function ProfileStatusWithHooks (props) {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    function activateEditMod () {
        setEditMode(true);
    }

    function deactivateEditMod () {
        setEditMode(false);
        props.updateUserStatusThunkCreator(status);
    }

    function onStatusChange (e) {
        setStatus(e.currentTarget.value);
    }

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <div>
            { (editMode) 
            ? <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMod } value={status} />    
            </div>
            : <div>
                <span onClick={ activateEditMod } >{status || "fixed"}</span>
            </div> }
        </div>
    )
}

export default ProfileStatusWithHooks;