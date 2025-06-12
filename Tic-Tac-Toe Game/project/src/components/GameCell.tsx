import React from 'react';
import { X, Circle } from 'lucide-react';
import { CellValue } from '../types/game';

interface GameCellProps {
  value: CellValue;
  onClick: () => void;
  isWinning: boolean;
  disabled: boolean;
  index: number;
}

export function GameCell({ value, onClick, isWinning, disabled, index }: GameCellProps) {
  const getCellContent = () => {
    if (value === 'X') {
      return <X className="w-8 h-8 md:w-12 md:h-12 text-blue-600" strokeWidth={3} />;
    }
    if (value === 'O') {
      return <Circle className="w-8 h-8 md:w-12 md:h-12 text-amber-500" strokeWidth={3} />;
    }
    return null;
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || value !== null}
      className={`
        aspect-square rounded-lg border-2 border-gray-200 bg-white
        flex items-center justify-center
        transition-all duration-200 ease-in-out
        hover:bg-gray-50 hover:border-gray-300 hover:shadow-md
        active:scale-95 active:bg-gray-100
        disabled:cursor-not-allowed
        ${isWinning ? 'bg-green-100 border-green-400 shadow-lg ring-2 ring-green-200' : ''}
        ${value ? 'cursor-default' : 'cursor-pointer'}
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
      `}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      <div className={`
        transition-all duration-300 ease-out
        ${value ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        ${isWinning ? 'animate-pulse' : ''}
      `}>
        {getCellContent()}
      </div>
    </button>
  );
}