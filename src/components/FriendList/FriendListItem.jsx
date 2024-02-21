import styles from './FriendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClassName = clsx(styles.status, {
    [styles.online]: isOnline,
    [styles.offline]: !isOnline,
  });
  const statusText = isOnline ? 'Online' : 'Offline';
  return (
    <li className={styles.item}>
      <img className="img" src={avatar} alt="Avatar" width="48" />
      <p className="name">{name}</p>
      <p className={statusClassName}>{statusText}</p>
    </li>
  );
};

export default FriendListItem;
