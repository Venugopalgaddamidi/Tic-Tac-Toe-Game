export type Player = 'X' | 'O';
export type CellValue = Player | null;
export type GameBoard = CellValue[];
export type GameStatus = 'playing' | 'won' | 'draw';

export interface GameState {
  board: GameBoard;
  currentPlayer: Player;
  status: GameStatus;
  winner: Player | null;
  winningLine: number[] | null;
  scores: {
    X: number;
    O: number;
    draws: number;
  };
}

export interface WinningCombination {
  indices: number[];
  type: 'row' | 'column' | 'diagonal';
}