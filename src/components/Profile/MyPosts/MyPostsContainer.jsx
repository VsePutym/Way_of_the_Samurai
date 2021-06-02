import {addPostActionCreator, updateNewPostTextCreator} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //меняем value textarea для BLL
    updateNewPostText : (text) => {
      dispatch(updateNewPostTextCreator(text))
    },
    addPost : () => {
      //Добовляем сообщение
      dispatch(addPostActionCreator());
    }
  }
}

let MyPostsContainer = connect( mapStateToProps, mapDispatchToProps )( MyPosts );
export default MyPostsContainer;