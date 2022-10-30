import {useEffect} from 'react';
import './App.css';
import {useTelegram} from './hook/useTelegram'


function App() {
  const {onToggleButton, tgw} = useTelegram();

  useEffect( () => {
    tgw.ready();
  }, [])

  return (
    <div className="App">
      it doesn't work
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
