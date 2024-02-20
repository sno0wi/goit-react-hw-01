import styles from './FriendList.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img className="img" src={avatar} alt="Avatar" width="48" />
      <p className="name">{name}</p>
      {isOnline ? (
        <p style={{ color: 'green' }} className="status">
          Online
        </p>
      ) : (
        <p style={{ color: 'red' }} className="status">
          Offline
        </p>
      )}
    </li>
  );
};

export default FriendListItem;
