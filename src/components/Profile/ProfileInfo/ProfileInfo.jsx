import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  return (
    <div className={s.userContainer}>
      <div className={s.userFullName}>
        {props.profile.fullName}
      </div>
      <div className={s.userGrid}>
        <div className={s.userImg}>
          <img src={props.profile.photos.large} alt=""/>
        </div>
        <div className={s.userContacts}>
          <h2>Contacts:</h2>
          <ul>
            <li className={s.facebook}>{props.profile.contacts.facebook}</li>
            <li className={s.vk}>{props.profile.contacts.vk}</li>
            <li className={s.twitter}>{props.profile.contacts.twitter}</li>
            <li className={s.instagram}>{props.profile.contacts.instagram}</li>
            <li className={s.github}>{props.profile.contacts.github}</li>
            <li className={s.mainLink}>{props.profile.contacts.mainLink}</li>
            <li className={s.youtube}>{props.profile.contacts.youtube}</li>
            <li className={s.website}>{props.profile.contacts.website}</li>
          </ul>
        </div>
        <div className={s.status}>
          <div>{props.profile.aboutMe}</div>
          <div className={s.lookingForAJob}>looking For A Job: true</div>
          <div className={s.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;