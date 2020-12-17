import React from "react";
import s from "./Users.module.css";
import userPhoto from "./../../assets/images/img.jpg";
import { NavLink } from "react-router-dom";

function User (props) {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/Profile/${props.user.id}`}>
                        <img className={s.avatar} alt="img" src={props.user.photos.small || userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {props.user.followed ? 
                    <button disabled={props.followingInProgress.some( id => id === props.user.id )} onClick={ () => {
                        props.unFollowThunkCreator(props.user.id);
                    } }>Unfollow</button> : 
                    <button disabled={props.followingInProgress.some( id => id === props.user.id )} onClick={ () => {
                        props.followThunkCreator(props.user.id);
                    } }>Follow</button> }
                </div>
            </span>
            <span>
                <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span>
                    <div>{"props.user.location.city"}</div>
                    <div>{"props.user.location.country"}</div>
                </span>
            </span>
        </div>
    )
}

export default User;