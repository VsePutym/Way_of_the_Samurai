import MyPost from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <MyPost />
        </div>
    );
};

export default Profile;