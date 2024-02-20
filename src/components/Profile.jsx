import './Profile.css';

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
    <div className="wrapper">
      <div className="userInfo">
        <img width={150} src={avatar} alt="User avatar" className="avatar" />
        <p className="userName">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="list">
        <li className="item">
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className="item">
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className="item">
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
