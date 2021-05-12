import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <ul className={s.myPost}> my post
    <Post message='Hello, tomorrow i am going on vacation' like='20'/>
    <Post message='What is up?' like='4'/>
    <Post message='Finally I started learning React' like='15'/>
    <Post message='Finally I started learning React' like='15'/>
  </ul>
};

export default MyPosts;