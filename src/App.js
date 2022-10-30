import React, {useEffect} from 'react';
import './App.css';
import {useTelegram} from './Hook/useTelegram'


function App() {
  const {onToggleButton, tgw} = useTelegram();

  useEffect( () => {
    tgw.ready();
  })

  return (
    <div className="App">
      <Header />
      does it work?      
      <button onClick={onToggleButton}>Main Button</button>
    </div>
  );
}

export default App;
