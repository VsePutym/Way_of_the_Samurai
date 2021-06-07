import {followAPI, usersAPI} from "../api/api";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}


const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW :
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW :
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS :
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE :
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      }
    case TOGGLE_IS_FETCHING :
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_FOLLOWING_IN_PROGRESS :
      return {
        ...state,
        //1) если true, то добовляем в followingInProgress id пользователя, 2) если нет то удаляем
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          :  state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}


export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (followingInProgress, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, followingInProgress, userId});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    // start preloader
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  }
}


export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    followAPI.followSuccess(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
    dispatch(toggleFollowingProgress(false, userId))
    });
  }
}

export const unFollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    followAPI.unFollowSuccess(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unFollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))
      });
  }
}

export default usersReducer;