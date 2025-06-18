import React, { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import PlayerTurnIndicator from './components/PlayerTurnIndicator';
import ResetGameButton from './components/ResetGameButton';

// PUBLIC_INTERFACE
function App() {
  // State for the game board and player turn
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  // Helper function to check for a winner
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6]             // diags
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  // Handle a cell click
  const handleCellClick = (idx) => {
    if (board[idx] || winner) return; // Ignore if already filled or won
    const nextBoard = board.slice();
    nextBoard[idx] = isXNext ? 'X' : 'O';
    const win = calculateWinner(nextBoard);
    setBoard(nextBoard);
    setWinner(win);
    setIsXNext(!isXNext);
  };

  // Reset the game
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsXNext(true);
  };

  // Determine draw
  const isDraw = !winner && board.every(cell => cell);

  return (
    <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <nav className="navbar" style={{ background: '#4CAF50' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol" style={{ color: '#2196F3' }}>#</span>&nbsp;WebTicTacToe
            </div>
          </div>
        </div>
      </nav>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 80 }}>
        <PlayerTurnIndicator
          isXNext={isXNext}
          winner={winner}
          isDraw={isDraw}
        />
        <GameBoard
          board={board}
          onCellClick={handleCellClick}
          winner={winner}
        />
        <div style={{ marginTop: 24 }}>
          <ResetGameButton onClick={handleReset} />
        </div>
      </main>
    </div>
  );
}

export default App;