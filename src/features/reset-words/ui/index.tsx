import { generateRandomWords, resetTimerStateToInitial, resetWordsStateToInitial } from '@/entities';
import { useAppDispatch, useAppSelector } from '@/shared';
import React from 'react';

// Оборачиваем компонент в мемо дабы избежать лишних перерисовок
export const ResetWords = React.memo(() => {
  const isStarted = useAppSelector((state) => state.timer.isStarted);
  const isFinished = useAppSelector((state) => state.timer.isFinished);
  const dispatch = useAppDispatch();

  // Функция нажатия на кнпоку перезапуска в главном виджете с таймером словами и тд
  const defaultOnClick = () => {
    // Сбрасываем состояние
    dispatch(resetWordsStateToInitial());
    // И генерируем новые слова
    dispatch(generateRandomWords());
  };

  // Функция нажатия на кнопку перезапуска в виджете финальных результатов
  const finishedOnClick = () => {
    // Сбрасываем все состояние
    dispatch(resetTimerStateToInitial());
    dispatch(resetWordsStateToInitial());
    // И гененируем новые слова
    dispatch(generateRandomWords());
  };

  // Если компонент находится в виджете финальных результатов то убираем стили с привязкой к isStarted
  if (isFinished) {
    return (
      <button onClick={finishedOnClick} className="self-center outline-none transition-all duration-300">
        <svg width={24} height={24} className="transition-all duration-300 fill-slate-500 hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23,12A11,11,0,1,1,12,1a10.9,10.9,0,0,1,5.882,1.7l1.411-1.411A1,1,0,0,1,21,2V6a1,1,0,0,1-1,1H16a1,1,0,0,1-.707-1.707L16.42,4.166A8.9,8.9,0,0,0,12,3a9,9,0,1,0,9,9,1,1,0,0,1,2,0Z" />
        </svg>
      </button>
    );
  }

  return (
    <button onClick={defaultOnClick} className={`${isStarted ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'} self-center outline-none transition-all duration-300`}>
      <svg width={24} height={24} className="transition-all duration-300 fill-slate-500 hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23,12A11,11,0,1,1,12,1a10.9,10.9,0,0,1,5.882,1.7l1.411-1.411A1,1,0,0,1,21,2V6a1,1,0,0,1-1,1H16a1,1,0,0,1-.707-1.707L16.42,4.166A8.9,8.9,0,0,0,12,3a9,9,0,1,0,9,9,1,1,0,0,1,2,0Z" />
      </svg>
    </button>
  );
});
