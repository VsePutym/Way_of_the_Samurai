import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";

const MyPosts = (props) => {
  console.log(props.newPostText)
  let postsElements = props.posts.map((p, i) => <Post key ={i} message={p.message} likes={p.likes} />);
  let newPostElement = React.createRef();

  //Functions for MyPosts

//Добовляем сообщение
  const addPost = () =>{
    props.dispatch(addPostActionCreator());
  };

//меняем value textarea для BLL
  const onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action);
  }

//End Functions

  return (
    <div className={s.post_block}>
      <h3>my post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} name="" id="" cols="100" rows="1" value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <ul className="posts"> {postsElements} </ul>
    </div>
  )
};

export default MyPosts;