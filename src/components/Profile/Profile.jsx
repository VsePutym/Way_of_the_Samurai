import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className="test">
      <ProfileInfo/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;