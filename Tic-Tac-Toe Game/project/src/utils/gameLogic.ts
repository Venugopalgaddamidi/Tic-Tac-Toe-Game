import { GameBoard, Player, WinningCombination } from '../types/game';

const WINNING_COMBINATIONS: WinningCombination[] = [
  // Rows
  { indices: [0, 1, 2], type: 'row' },
  { indices: [3, 4, 5], type: 'row' },
  { indices: [6, 7, 8], type: 'row' },
  // Columns
  { indices: [0, 3, 6], type: 'column' },
  { indices: [1, 4, 7], type: 'column' },
  { indices: [2, 5, 8], type: 'column' },
  // Diagonals
  { indices: [0, 4, 8], type: 'diagonal' },
  { indices: [2, 4, 6], type: 'diagonal' },
];

export function checkWinner(board: GameBoard): { winner: Player | null; winningLine: number[] | null } {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination.indices;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return {
        winner: board[a] as Player,
        winningLine: combination.indices,
      };
    }
  }
  return { winner: null, winningLine: null };
}

export function isBoardFull(board: GameBoard): boolean {
  return board.every(cell => cell !== null);
}

export function getNextPlayer(currentPlayer: Player): Player {
  return currentPlayer === 'X' ? 'O' : 'X';
}

export function createEmptyBoard(): GameBoard {
  return Array(9).fill(null);
}