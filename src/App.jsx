import './App.css';
import Profile from './components/Profile';
import userData from './userData.json';

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
    </>
  );
}

export default App;
