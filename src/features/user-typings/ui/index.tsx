import { setTop } from '@/entities';
import { Caret, useAppDispatch, useAppSelector } from '@/shared';
import React from 'react';
import { useTypings } from '../hooks';
import { Character } from './character';

export const UserTypings = () => {
  const { generatedWords, top } = useAppSelector((state) => state.words);
  const dispatch = useAppDispatch();

  // Создаем реф для курсора
  // В текущей реализации прокрутка текста при вводе завязяна на позиции курсора относительно вертикальной координаты элемента видимых слов
  const caretRef = React.useRef<HTMLDivElement>(null);

  // Достаем значение пользовательского ввода из хука
  const { userInput } = useTypings();

  // Создаем массив символов из пользовательского ввода
  const typedCharacters = userInput.split('');

  React.useEffect(() => {
    // Если значение offsetTop больше 32 те если курсор находится на второй строке
    if (caretRef.current && caretRef.current.offsetTop >= 32) {
      // То меняем top на отрицательное значение offsetTop тк оно положительное а при абсолютном позицировании дабы эффект прокрутки шел снизу вверх нужно придать отрицательное значение top и прибавляем 32 дабы отсчет шел со второй строки
      dispatch(setTop(-caretRef.current.offsetTop + 32));
    }
    // В массив зависимостей передаем значение offsetTop
  }, [caretRef.current?.offsetTop]);

  return (
    <div className="absolute inset-0 transition-all duration-300" style={{ top: top }}>
      {typedCharacters.map((character, index) => (
        <Character key={`${character}_${index}`} actual={character} expected={generatedWords[index]} />
      ))}
      <div className="inline-block" ref={caretRef}>
        <Caret />
      </div>
    </div>
  );
};
