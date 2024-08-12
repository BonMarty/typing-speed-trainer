import { CharacterProps } from './types';

export const Character = (props: CharacterProps) => {
  const { actual, expected } = props;

  const isCorrect = actual === expected;
  const isWhiteSpace = expected === ' ';

  // Если символ введен неправильно и это не пробел
  if (!isCorrect && !isWhiteSpace) {
    // Возвращаем красненький символ
    return <span className="text-rose-500 text-2xl">{expected}</span>;
  }

  // Если символ введен неправильно и это пробел
  if (!isCorrect && isWhiteSpace) {
    // Возвращаем красненький прямоугольник
    return <span className="bg-rose-500/25 text-2xl">{expected}</span>;
  }

  // Возвращаем зелененький
  return <span className="text-emerald-500 text-2xl">{expected}</span>;
};
