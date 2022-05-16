/* jshint ignore:start */
import { createContext, useState } from 'react';

import './App.css';
import Keyboard from './components/Keyboard';
import Board from './components/Board';
import { boardDefault } from './Words';

function App() {
  const [board, setBoard] = useState(boardDefault);

  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <div className="game">
        <AppContext.Provider
          value={(board, setBoard, currAttempt, setCurrAttempt)}
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
