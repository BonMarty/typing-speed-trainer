import { generateRandomWords, setTimeLimit } from '@/entities';
import { Typography, useAppDispatch, useAppSelector } from '@/shared';
import React from 'react';

export const ChangeTimeLimit = () => {
  const { timeLimit, isStarted } = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();

  const handleClick = React.useCallback(
    (limit: 15 | 30 | 60) => {
      // Меняем лимит времени
      dispatch(setTimeLimit(limit));

      // И если пользователь нажал на отличающееся от текущего значение
      if (timeLimit !== limit) {
        // То генерируем новые слова
        dispatch(generateRandomWords());
      }
    },
    [timeLimit],
  );

  return (
    <div className={`text-center space-x-10 transition-all duration-300 ${isStarted ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
      <button onClick={() => handleClick(15)} className="outline-none">
        <Typography color={`${timeLimit === 15 ? 'text-emerald-500' : 'text-gray-400 hover:text-white'}`} size="lg">
          15
        </Typography>
      </button>
      <button onClick={() => handleClick(30)} className="outline-none">
        <Typography color={`${timeLimit === 30 ? 'text-emerald-500' : 'text-gray-400 hover:text-white'}`} size="lg">
          30
        </Typography>
      </button>
      <button onClick={() => handleClick(60)} className="outline-none">
        <Typography color={`${timeLimit === 60 ? 'text-emerald-500' : 'text-gray-400 hover:text-white'}`} size="lg">
          60
        </Typography>
      </button>
    </div>
  );
};
