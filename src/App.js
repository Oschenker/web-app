import React, {useEffect} from 'react';
import './App.css';
import {useTelegram} from './hook/useTelegram';
import Button from './button/button';
import Header from './header/header';


function App() {
  const {onToggleButton, onClose, user, tgw} = useTelegram();

  useEffect(() => {
    tgw.ready(); 
  }, [])

  return (
    <div className="App">
      <Header />
      does it work?
      <Button onClick={onToggleButton}>Main Button</Button>
    </div>
  );
}

export default App;
