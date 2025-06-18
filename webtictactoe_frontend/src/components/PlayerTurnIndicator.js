import React from 'react';

// PUBLIC_INTERFACE
/**
 * PlayerTurnIndicator displays which player's turn, winner, or if it's a draw
 * @param {Object} props
 * @param {Boolean} props.isXNext - If true, X's turn; else O's turn
 * @param {String|null} props.winner - 'X', 'O', or null
 * @param {Boolean} props.isDraw - true if draw
 */
function PlayerTurnIndicator({ isXNext, winner, isDraw }) {
  let content;
  if (winner) {
    content = (
      <span>
        <span style={{ color: winner === 'X' ? '#4CAF50' : '#2196F3', fontWeight: 600 }}>
          Player {winner}
        </span>{" "}
        wins!
      </span>
    );
  } else if (isDraw) {
    content = (
      <span style={{ color: '#FFA726', fontWeight: 500 }}>
        It's a draw!
      </span>
    );
  } else {
    content = (
      <span>
        Next turn:{" "}
        <span style={{
          color: isXNext ? '#4CAF50' : '#2196F3',
          fontWeight: 600
        }}>
          Player {isXNext ? 'X' : 'O'}
        </span>
      </span>
    );
  }

  return (
    <div style={{
      fontSize: 22,
      marginTop: 16,
      marginBottom: 4,
      color: '#222',
      textAlign: 'center'
    }}>
      {content}
    </div>
  );
}

export default PlayerTurnIndicator;
