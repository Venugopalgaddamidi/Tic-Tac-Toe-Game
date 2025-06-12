import React from 'react';
import { Trophy, Users, RotateCcw } from 'lucide-react';
import { GameState } from '../types/game';

interface GameStatusProps {
  gameState: GameState;
  onReset: () => void;
  onNewGame: () => void;
}

export function GameStatus({ gameState, onReset, onNewGame }: GameStatusProps) {
  const getStatusMessage = () => {
    if (gameState.status === 'won') {
      return (
        <div className="flex items-center gap-2 text-green-600">
          <Trophy className="w-5 h-5" />
          <span className="font-semibold">Player {gameState.winner} Wins!</span>
        </div>
      );
    }
    if (gameState.status === 'draw') {
      return (
        <div className="flex items-center gap-2 text-amber-600">
          <Users className="w-5 h-5" />
          <span className="font-semibold">It's a Draw!</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2 text-gray-700">
        <div className={`w-3 h-3 rounded-full ${gameState.currentPlayer === 'X' ? 'bg-blue-600' : 'bg-amber-500'}`} />
        <span className="font-medium">Player {gameState.currentPlayer}'s Turn</span>
      </div>
    );
  };

  return (
    <div className="text-center space-y-4">
      <div className="text-lg">
        {getStatusMessage()}
      </div>
      
      <div className="flex gap-3 justify-center">
        <button
          onClick={onReset}
          className="
            flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg
            hover:bg-blue-700 transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            active:scale-95 transform
          "
        >
          <RotateCcw className="w-4 h-4" />
          Reset Round
        </button>
        
        <button
          onClick={onNewGame}
          className="
            flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg
            hover:bg-gray-700 transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
            active:scale-95 transform
          "
        >
          New Game
        </button>
      </div>
    </div>
  );
}