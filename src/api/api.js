import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {'API-KEY': '1c754c2e-792d-4e14-8e6b-32c7259c736d'}
})


export const  usersAPI = {
  getUsers (currentPage = 1, pageSize = 10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
  }
}

export const followAPI = {
  unFollowSuccess (userId){
    return instance.delete(`follow/${userId}`)
  },
  followSuccess (userId){
    return instance.post(`follow/${userId}`)
  },
}

export const profileAPI = {
  getUserProfile(props){
    return instance.get(`profile/${props}`)
      .then(response => {
        return response.data;
      })
  }
}

export const HeaderInfoAPI = {
  getLogIn(){
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      })
  }

}