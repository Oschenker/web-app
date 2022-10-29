import React, { useEffect } from 'react';
import './App.css';
const tgw = window.Telegram.WebApp;


function App() {

  useEffect( () => {
    tgw.ready();
  }, [])

  const onClose = () => {
    tgw.close()
  }
  return (
    <div className="App">
      <header className="App-header">
        IT'S WORK SUCCESSFULLY

        <button onClick={onClose}>CLOSE</button>
      </header>
    </div>
  );
}

export default App;
