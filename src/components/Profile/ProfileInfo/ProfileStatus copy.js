import React from 'react';
//import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMod = () => {
        this.setState({
            editMode: true,
        });
    }

    deactivateEditMod = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateUserStatusThunkCreator(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate (prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render () {
        return (
            <div>
                { (this.state.editMode) 
                ? <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMod } value={this.state.status} />    
                </div>
                : <div>
                    <span onClick={ this.activateEditMod } >{this.props.status || "fixed"}</span>
                </div> }
            </div>
        )
    }
    
}

export default ProfileStatus;