import {connect} from "react-redux";
import {follow, setCurrentPage, unFollow, toggleFollowingProgress, getUsers} from "../../Redux/users_reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersAPIComponent extends React.PureComponent {

  componentDidMount() {
  this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.pageNumber}
             onPageChange={this.onPageChange}
             users={this.props.users}
             unFollow={this.props.unFollow}
             followingInProgress={this.props.followingInProgress}
             follow={this.props.follow}/>
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}


const usersContainer = connect(mapStateToProps, {follow, toggleFollowingProgress, unFollow, setCurrentPage, getUsers})(UsersAPIComponent);

export default usersContainer;
