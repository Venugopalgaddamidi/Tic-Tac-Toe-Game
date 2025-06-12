import React from 'react';
import { GameCell } from './GameCell';
import { GameState } from '../types/game';

interface GameBoardProps {
  gameState: GameState;
  onCellClick: (index: number) => void;
}

export function GameBoard({ gameState, onCellClick }: GameBoardProps) {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4 w-full max-w-sm mx-auto p-4">
      {gameState.board.map((cell, index) => (
        <GameCell
          key={index}
          value={cell}
          onClick={() => onCellClick(index)}
          isWinning={gameState.winningLine?.includes(index) || false}
          disabled={gameState.status !== 'playing'}
          index={index}
        />
      ))}
    </div>
  );
}