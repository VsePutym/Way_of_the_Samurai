import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  toggleIsFetching,
  unFollow
} from "../../Redux/users_reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersAPIComponent extends React.PureComponent {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials: true}).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChange = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{withCredentials: true}).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items)
    });
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
    <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChange={this.onPageChange}
                  users={this.props.users}
           unFollow={this.props.unFollow}
                  follow={this.props.follow}/>
      </>
  }
}

const mapStateToProps = (state) =>{
  return{
    users: state.usersPage.users,
    pageSize : state.usersPage.pageSize,
    totalUsersCount : state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}


const usersContainer = connect( mapStateToProps,{follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} )( UsersAPIComponent );

export default  usersContainer;
