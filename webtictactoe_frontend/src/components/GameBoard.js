import React from 'react';

// PUBLIC_INTERFACE
/**
 * GameBoard component renders a 3x3 tic-tac-toe board.
 * @param {Object} props
 * @param {Array} props.board - Array of 9 cells ('X', 'O', or null)
 * @param {Function} props.onCellClick - Handler for when a cell is clicked
 * @param {String|null} props.winner - 'X', 'O', or null if no winner yet
 */
function GameBoard({ board, onCellClick, winner }) {
  // Render a single cell (square)
  function renderCell(idx) {
    return (
      <button
        key={idx}
        className="ttt-cell"
        style={{
          width: 80,
          height: 80,
          fontSize: 36,
          fontWeight: 'bold',
          color: board[idx] === 'X' ? '#4CAF50' : '#2196F3',
          background: '#fff',
          border: '2px solid #EEE',
          cursor: winner || board[idx] ? 'not-allowed' : 'pointer',
          transition: 'background 0.2s'
        }}
        onClick={() => onCellClick(idx)}
        aria-label={`cell ${idx + 1}`}
        disabled={!!board[idx] || winner}
      >
        {board[idx]}
      </button>
    );
  }

  // The board as a grid
  return (
    <div
      className="ttt-board"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 80px)',
        gap: 5,
        background: '#FFC107',
        padding: 18,
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        margin: '32px 0'
      }}
    >
      {board.map((_, idx) => renderCell(idx))}
    </div>
  );
}

export default GameBoard;
