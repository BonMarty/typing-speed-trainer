// Функция подсчета ошибок принимает в себя два аргумента
// Первый это пользовательский ввод
// Второй это ожидаемый ввод
export const countErrors = (actual: string, expected: string) => {
  // Сплитим строку дабы получить массив символов
  const expectedCharacters = expected.split('');

  // Используем reduce дабы подсчитать количество ошибок
  return expectedCharacters.reduce((errors, expectedCharacter, index) => {
    // Введенный пользователем символ
    const actualCharacter = actual[index];

    // Если введенный пользователем символ не совпадает с ожидаемым
    if (actualCharacter !== expectedCharacter) {
      // То увеличиваем счетчик ошибок
      errors++;
    }

    return errors;
  }, 0);
};
