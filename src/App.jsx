import './App.css';
import Profile from './components/React-Profile/Profile.jsx';
import FriendList from './components/React-FriendList/FriendList.jsx';
import TransactionHistory from './components/React-TransactionHistory/TransactionHistory.jsx';
import userData from './components/React-Profile/userData.json';
import friends from './components/React-FriendList/friends.json';
import transactions from './components/React-TransactionHistory/transactions.json';

function App() {
  return (
    <>
      <Profile
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
