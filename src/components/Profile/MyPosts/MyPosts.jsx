import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

  let postsElements = props.posts.map((p, i) => <Post key ={i} message={p.message} likes={p.likes} />);


  //Functions for MyPosts

//Добовляем сообщение
  const onAddPost = () =>{
    props.addPost();
  };

//меняем value textarea для BLL
  let newPostElement = React.createRef();
  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

//End Functions

  return (
    <div className={s.post_block}>
      <h3>my post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} placeholder='Enter new Text' name="" id="" cols="100" rows="1" value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ onAddPost }>Add post</button>
        </div>
      </div>
      <ul className="posts"> {postsElements} </ul>
    </div>
  )
};

export default MyPosts;