import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, 
         unFollow, 
         selectPage, 
         toggleBtnStatus,
         getUsersThunkCreator,
         followThunkCreator,
         unFollowThunkCreator,} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
//import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getUsersState, getPageSizeState, getTotalUsersCountState, getCurrentPageState, getFetchState, getFollowingInProgressState } from '../../redux/selectors/users-selectors';

class UsersContainerAPI extends React.Component {

    componentDidMount () {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (p) => {
        this.props.selectPage(p);
        this.props.getUsersThunkCreator(p, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.fetch && <Preloader /> }
                <Users currentPage={this.props.currentPage} 
                       selectPage={this.props.selectPage}
                       users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                       followThunkCreator={this.props.followThunkCreator}
                       unFollowThunkCreator={this.props.unFollowThunkCreator}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize} />
            </>
        )
    }
}

// function mapStateToProps (state) {
//     return {
//         users: state.users.users,
//         pageSize: state.users.pageSize,
//         totalUsersCount: state.users.totalUsersCount,
//         currentPage: state.users.currentPage,
//         fetch: state.users.fetch,
//         followingInProgress: state.users.followingInProgress,
//     }
// }

function mapStateToProps (state) {
    return {
        users: getUsersState(state),
        pageSize: getPageSizeState(state),
        totalUsersCount: getTotalUsersCountState(state),
        currentPage: getCurrentPageState(state),
        fetch: getFetchState(state),
        followingInProgress: getFollowingInProgressState(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        selectPage,
        toggleBtnStatus,
        getUsersThunkCreator,
        followThunkCreator,
        unFollowThunkCreator,
    }),
    //withAuthRedirect,
)(UsersContainerAPI);