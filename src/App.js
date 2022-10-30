import React, {useEffect} from 'react';
import './App.css';
import {useTelegram} from './Hook/useTelegram'


function App() {
  const {onToggleButton, onClose, user, tgw} = useTelegram();

  useEffect(() => {
    tgw.ready(); 
  }, [])

  return (
    <div className="App">
      <button onClick={onClose}>Close app</button>
      does it work?
      <span className={'username'}>
                {user?.username}
      </span>
      <button onClick={onToggleButton}>Main Button</button>
    </div>
  );
}

export default App;
