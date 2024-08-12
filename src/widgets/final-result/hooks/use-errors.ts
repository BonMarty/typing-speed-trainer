import { useAppSelector } from '@/shared';
import React from 'react';
import { countErrors } from '../utils';

export const useErrors = () => {
  const errors = React.useRef(0);

  const { userInput, generatedWords, cursorPositon } = useAppSelector((state) => state.words);

  React.useEffect(() => {
    // Слайсим все слова до позиции к которой дошел пользователь
    const wordsThatUserReached = generatedWords.slice(0, cursorPositon);

    errors.current = countErrors(userInput, wordsThatUserReached);
  }, []);

  return {
    errors,
  };
};
