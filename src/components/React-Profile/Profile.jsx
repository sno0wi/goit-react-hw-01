import styles from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <img
          width={150}
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.userName}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
