import { generateRandomWords, resetTimerStateToInitial, resetWordsStateToInitial } from '@/entities';
import { ResetWords } from '@/features';
import { useAppDispatch, useAppSelector } from '@/shared';
import { BaseLayout, FinalResult, WordsWithTimer } from '@/widgets';
import React from 'react';

export const HomePage = () => {
  const isFinished = useAppSelector((state) => state.timer.isFinished);
  const dispatch = useAppDispatch();

  // Функция обработки на нажатие escape
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      // Сбрасываем все на изначальные значения
      dispatch(resetTimerStateToInitial());
      dispatch(resetWordsStateToInitial());

      // И генерируем новые слова
      dispatch(generateRandomWords());
    }
  };

  React.useEffect(() => {
    // Вешаем обарботчик событий
    document.addEventListener('keydown', handleEscape);

    return () => {
      // Убираем обработчик событий
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <BaseLayout>
      <section className="flex-1 flex flex-col gap-8">
        {isFinished ? (
          <>
            <FinalResult />
            <ResetWords />
          </>
        ) : (
          <>
            <WordsWithTimer />
            <ResetWords />
          </>
        )}
      </section>
    </BaseLayout>
  );
};
