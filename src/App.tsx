import React, {useState} from 'react';
import './App.css';
import Button from './components/Button';
import Board from './components/Board';

function App() {
  const [started, setStarted] = useState(false);

  const newGameBtnHandler = () => {
    setStarted(true);
  };

  return (
    <div className="App">
      {started ? (
        <Board />
      ) : (
        <Button text="New Game" bgColor="#31C3BD" handler={newGameBtnHandler} />
      )}
    </div>
  );
}

export default App;
