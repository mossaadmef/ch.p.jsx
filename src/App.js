import React from 'react';
import ProfilePhoto from './Components/ProfilePhoto';
import './App.css'; 
import FullName from './Components/FullName';
import Address from './Components/Address';
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
