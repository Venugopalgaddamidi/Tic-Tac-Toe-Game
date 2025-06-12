import React from 'react';
import { GameBoard } from './components/GameBoard';
import { GameStatus } from './components/GameStatus';
import { ScoreBoard } from './components/ScoreBoard';
import { useGame } from './hooks/useGame';
import { Gamepad2 } from 'lucide-react';

function App() {
  const { gameState, makeMove, resetRound, newGame } = useGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">Tic-Tac-Toe</h1>
            </div>
            <p className="text-gray-600">Classic strategy game for two players</p>
          </div>

          {/* Score Board */}
          <ScoreBoard gameState={gameState} />

          {/* Game Board */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <GameBoard gameState={gameState} onCellClick={makeMove} />
          </div>

          {/* Game Status */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <GameStatus 
              gameState={gameState} 
              onReset={resetRound}
              onNewGame={newGame}
            />
          </div>

          {/* Game Rules */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Get three in a row to win • Horizontal, vertical, or diagonal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;