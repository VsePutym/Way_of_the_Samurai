import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unFollowAC} from "../../Redux/users_reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.PureComponent {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    });
  }

  render() {
    return <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChange={this.onPageChange}
                  users={this.props.users}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}/>
  }
}

const mapStateToProps = (state) =>{
  return{
    users: state.usersPage.users,
    pageSize : state.usersPage.pageSize,
    totalUsersCount : state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    follow : (userId) => {
      dispatch(followAC(userId))
    },unfollow : (userId) => {
      dispatch(unFollowAC(userId))
    },setUsers : (users) => {
      dispatch(setUsersAC(users))
    },setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    }, setTotalUsersCount : (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    }
  }
}

const usersContainer = connect( mapStateToProps, mapDispatchToProps )( UsersAPIComponent );

export default  usersContainer;
