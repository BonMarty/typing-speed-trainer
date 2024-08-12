import { useAppSelector } from '@/shared';
import React from 'react';

// Wpm = Words per minute
export const useWpm = () => {
  const [wpm, setWpm] = React.useState(0);

  const { userInput } = useAppSelector((state) => state.words);
  const timeLimit = useAppSelector((state) => state.timer.timeLimit);

  React.useEffect(() => {
    if (timeLimit === 15) {
      // Количество введенных слов за 15 секунд умножаем на 4 и получаем количество слов в минуту за 15 секундный интервал
      setWpm(userInput.split(' ').length * 4);
    }

    if (timeLimit === 30) {
      // Количество введенных слов за 30 секунд умножаем на 2 и получаем количество слов в минуту за 30 секундный интервал
      setWpm(userInput.split(' ').length * 2);
    }

    if (timeLimit === 60) {
      // Количество введенных слов за 60 секунд умножаем на 1 и получаем количество слов в минуту за 60 секундный интервал
      setWpm(userInput.split(' ').length * 1);
    }
  }, []);

  return { wpm };
};
