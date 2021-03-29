import React from 'react'
import './App.css';
import Profile from './Components/Profile'
import user from './user.json'

function App() {
  return (
      <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
  );
}

export default App;
