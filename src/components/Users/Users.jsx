import s from "./Users.module.css";
import UserPhotos from "../../assets/img/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= 15; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.PageNumber}>
        <div>
          {pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => {props.onPageChange(p)}}>{p}</span>
          })}
        </div>
      </div>
      {props.users.map( u => <div key={u.id}>
        <div className={s.userContainer}>
          <div className={s.User}>
            <NavLink to={'/profile/' + u.id}>
              <div className={s.userImg}>
                <img src={u.photos.small !=null ? u.photos.small: UserPhotos } alt=""/>
              </div>
            </NavLink>
            <div className={s.userButton}>
              {u.followed
                ? <button onClick={ () => {

                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    {withCredentials: true, headers: {'api-key': '1c754c2e-792d-4e14-8e6b-32c7259c736d'}})
                    .then(response => {
                      if(response.data.resultCode === 0){
                        props.unFollow(u.id)
                      }
                    });

                  props.unFollow(u.id)}}>UnFollow</button>


                : <button onClick={ () => {

                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                    {withCredentials: true, headers: {'api-key': '1c754c2e-792d-4e14-8e6b-32c7259c736d'}})
                    .then(response => {
                      if(response.data.resultCode === 0){
                        props.follow(u.id)
                      }
                    });

                  props.follow(u.id)}}>Follow</button> }

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
