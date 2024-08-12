import { concatUserInput, decrementCursorPosition, incrementCursorPosition, setIsStarted, sliceUserInput } from '@/entities';
import { useAppDispatch, useAppSelector } from '@/shared';
import React from 'react';
import { isKeyboardCodeAllowed } from '../utils';

export const useTypings = () => {
  const { userInput } = useAppSelector((state) => state.words);
  const dispatch = useAppDispatch();

  // Создаем функцию обработки пользователем ввода с клавиатуры
  const handleKeyDown = React.useCallback((event: KeyboardEvent) => {
    const { key, code } = event;

    // Если пользователь пытается ввести недоступные символы
    if (!isKeyboardCodeAllowed(code)) {
      // То выходим из функции
      return;
    }

    // Таймер начинает обратный отсчет
    dispatch(setIsStarted(true));

    switch (key) {
      // Если пользователь нажал Backspace
      case 'Backspace':
        // То убираем один символ пользовательского ввода с конца
        dispatch(sliceUserInput());
        // И уменьшаем счетчик курсора
        dispatch(decrementCursorPosition());
        break;

      default:
        // Добавляем последний символ к пользовательскому вводу
        dispatch(concatUserInput(key));
        // И увеличиваем счетчик курсора
        dispatch(incrementCursorPosition());
    }
  }, []);

  React.useEffect(() => {
    // Вешаем обарботчик событий
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Убираем обработчик событий
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // React.useEffect(() => {
  //   if (cursorPositon === generatedWords.length) {
  //     dispatch(generateRandomWords());
  //   }
  // }, [cursorPositon]);

  return {
    userInput,
  };
};
