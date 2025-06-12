import React from 'react';
import { Trophy, Minus } from 'lucide-react';
import { GameState } from '../types/game';

interface ScoreBoardProps {
  gameState: GameState;
}

export function ScoreBoard({ gameState }: ScoreBoardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-yellow-500" />
        <h2 className="text-lg font-semibold text-gray-800">Score Board</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="space-y-1">
          <div className="text-2xl font-bold text-blue-600">{gameState.scores.X}</div>
          <div className="text-sm text-gray-600 font-medium">Player X</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-2xl font-bold text-gray-500">{gameState.scores.draws}</div>
          <div className="text-sm text-gray-600 font-medium flex items-center justify-center gap-1">
            <Minus className="w-3 h-3" />
            Draws
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="text-2xl font-bold text-amber-500">{gameState.scores.O}</div>
          <div className="text-sm text-gray-600 font-medium">Player O</div>
        </div>
      </div>
    </div>
  );
}