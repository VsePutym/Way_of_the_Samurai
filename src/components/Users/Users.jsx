import s from "./Users.module.css";
import UserPhotos from "../../assets/img/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.PageNumber}>
        <div>
          {pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage}
                         onClick={(e) => {
                           props.onPageChange(p)
                         }}>{p}</span>
          })}
        </div>
      </div>
      {props.users.map(u => <div key={u.id}>
        <div className={s.userContainer}>
          <div className={s.User}>
            <NavLink to={'/profile/' + u.id}>
              <div className={s.userImg}>
                <img src={u.photos.small != null ? u.photos.small : UserPhotos} alt=""/>
              </div>
            </NavLink>
            <div className={s.userButton}>
              {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => {props.unFollow(u.id)}}>UnFollow</button>

                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => {props.follow(u.id)}}>Follow</button>}

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

export default Users;
