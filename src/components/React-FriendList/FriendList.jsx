import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul>
      <li>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </li>
    </ul>
  );
};

export default FriendList;
