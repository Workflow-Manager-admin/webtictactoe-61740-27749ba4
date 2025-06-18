import React from 'react';

// PUBLIC_INTERFACE
/**
 * ResetGameButton renders a button to reset the Tic Tac Toe game.
 * @param {Object} props
 * @param {Function} props.onClick - Click handler to reset the game
 */
function ResetGameButton({ onClick }) {
  return (
    <button
      className="btn btn-large"
      style={{
        backgroundColor: '#2196F3',
        color: '#fff',
        border: 'none',
        borderRadius: 5,
        padding: '12px 32px',
        fontSize: 18,
        fontWeight: 500,
        cursor: 'pointer',
        boxShadow: '0 1px 4px 0 rgba(44,114,222,0.10)',
        letterSpacing: 1
      }}
      onClick={onClick}
    >
      Reset Game
    </button>
  );
}

export default ResetGameButton;
