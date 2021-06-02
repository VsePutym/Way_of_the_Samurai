import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unFollowAC} from "../../Redux/users_reducer";
import Users from "./Users";

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

const usersContainer = connect( mapStateToProps, mapDispatchToProps )( Users );

export default  usersContainer;
