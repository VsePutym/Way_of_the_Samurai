import s from './Users.module.css';
import * as axios from "axios";
import UserPhotos from '../../assets/img/user.png'
import React from "react";

class Users extends React.PureComponent {
  constructor(props) {
    super(props);
  }

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
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];

    for(let i = 1; i <= pagesCount; i++){
      pages.push(i);
    }

    return (
      <div>
        {/*<div className={s.PageNumber}>*/}
        {/*  <div>*/}
        {/*    {pages.map(p => {*/}
        {/*     return <span className={this.props.currentPage === p && s.selectedPage} onClick={(e) => {this.onPageChange(p)}}>{p}</span>*/}
        {/*    })}*/}
        {/*  </div>*/}
        {/*</div>*/}
        {this.props.users.map( u => <div key={u.id}>
          <div className={s.userContainer}>
            <div className={s.user}>
              <div className={s.userImg}>
                <img src={u.photos.small !=null ? u.photos.small: UserPhotos } alt=""/>
              </div>
              <div className={s.userButton}>
                {u.followed
                  ? <button onClick={ () => {this.props.unfollow(u.id)}}>UnFollow</button>
                  : <button onClick={ () => {this.props.follow(u.id)}}>Follow</button> }
              </div>
            </div>
            <div className={s.userInfo}>
              <div className={s.userName}>
                {u.name}
              </div>
              <div className={s.userStatus}>
                {u.status}
              </div>
              <div className={s.userLocation}>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    )
}
}

export default Users;