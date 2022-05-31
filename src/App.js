/* jshint ignore:start */
import { createContext, useState } from 'react';

import './App.css';
import Keyboard from './components/Keyboard';
import Board from './components/Board';
import { boardDefault } from './Words';

function App() {
  const [board, setBoard] = useState(boardDefault);

  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  const correctWord = 'MAYOR';
  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = '';
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <div className="game">
        <AppContext.Provider
          value={
            (board,
            setBoard,
            currAttempt,
            setCurrAttempt,
            onSelectLetter,
            onEnter,
            onDelete,
            correctWord)
          }
        >
          <Board />
          <Keyboard />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export const AppContext = createContext();

export default App;
