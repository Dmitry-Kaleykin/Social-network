import React from "react";
import Paginator from "./Paginator";
import User from "./User";

function Users (props) {
    
    return (
        <div>
            <Paginator usersPerPage={props.pageSize} 
                       totalUsersCount={props.totalUsersCount}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged} />
            {props.users.map( user => <User key={user.id}
                                            user={user} 
                                            followingInProgress={props.followingInProgress}
                                            followThunkCreator={props.followThunkCreator}
                                            unFollowThunkCreator={props.unFollowThunkCreator} />)}
        </div>
    )
}

export default Users;