import { useState, useCallback } from 'react';
import { GameState, Player } from '../types/game';
import { checkWinner, isBoardFull, getNextPlayer, createEmptyBoard } from '../utils/gameLogic';

const initialGameState: GameState = {
  board: createEmptyBoard(),
  currentPlayer: 'X',
  status: 'playing',
  winner: null,
  winningLine: null,
  scores: {
    X: 0,
    O: 0,
    draws: 0,
  },
};

export function useGame() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const makeMove = useCallback((index: number) => {
    if (gameState.board[index] || gameState.status !== 'playing') {
      return;
    }

    setGameState(prevState => {
      const newBoard = [...prevState.board];
      newBoard[index] = prevState.currentPlayer;

      const { winner, winningLine } = checkWinner(newBoard);
      const isFull = isBoardFull(newBoard);

      let newStatus = prevState.status;
      let newScores = { ...prevState.scores };

      if (winner) {
        newStatus = 'won';
        newScores[winner]++;
      } else if (isFull) {
        newStatus = 'draw';
        newScores.draws++;
      }

      return {
        ...prevState,
        board: newBoard,
        currentPlayer: winner || isFull ? prevState.currentPlayer : getNextPlayer(prevState.currentPlayer),
        status: newStatus,
        winner,
        winningLine,
        scores: newScores,
      };
    });
  }, [gameState.board, gameState.status]);

  const resetRound = useCallback(() => {
    setGameState(prevState => ({
      ...prevState,
      board: createEmptyBoard(),
      currentPlayer: 'X',
      status: 'playing',
      winner: null,
      winningLine: null,
    }));
  }, []);

  const newGame = useCallback(() => {
    setGameState(initialGameState);
  }, []);

  return {
    gameState,
    makeMove,
    resetRound,
    newGame,
  };
}