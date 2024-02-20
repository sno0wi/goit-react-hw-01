import './App.css';
import Profile from './components/React-Profile/Profile.jsx';
import FriendList from './components/React-FriendList/FriendList.jsx';
import userData from './userData.json';
import friends from './friends.json';

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
    </>
  );
}

export default App;
