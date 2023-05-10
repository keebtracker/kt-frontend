import React from 'react';
import './App.css';
import LoginButton from './components/login/login'
import LogoutButton from './components/logout/logout';

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <header className="App-header">
        hey there
      </header>
    </div>
  );
}

export default App;
