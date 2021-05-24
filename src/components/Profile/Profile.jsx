import MyPost from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="test">
      <ProfileInfo/>
      <MyPost posts={props.profilePage.posts}
              dispatch={props.dispatch}
              newPostText={props.profilePage.newPostText}/>
    </div>
  );
};

export default Profile;