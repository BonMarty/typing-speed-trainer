import { Typography, useAppDispatch, useAppSelector } from '@/shared';
import React from 'react';
import { setIsFinished } from '../model';
import { TimerProps } from './types';

export const Timer = (props: TimerProps) => {
  const { isStarted } = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();

  const [timerValue, setTimerValue] = React.useState(props.value);

  // Здесь в стейт записывается текущее значение из пропсов
  // При помощи isStared в массиве зависимостей обрабатывается сброс через escape
  React.useEffect(() => {
    setTimerValue(props.value);
  }, [props.value, isStarted]);

  React.useEffect(() => {
    // Таймаут для обычного уменьшения счетчика каждую секунду
    let decreaseTimeout: ReturnType<typeof setTimeout>;
    // Таймаут для последнего уменьшения когда счетчик будет равен 0
    let lastDecreaseTimeout: ReturnType<typeof setTimeout>;

    // Когда время истекает
    if (timerValue === 0) {
      lastDecreaseTimeout = setTimeout(() => {
        // Меняем значение isFinished на true
        dispatch(setIsFinished(true));
      }, 1000);
    }

    decreaseTimeout = setTimeout(() => {
      // Проверяем если счетчик больше 0 и если пользователь начал ввод
      if (timerValue > 0 && isStarted) {
        // В таком случае начинаем уменьшать счетчик
        setTimerValue((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      // Очищаем все таймауты
      clearTimeout(decreaseTimeout);
      clearTimeout(lastDecreaseTimeout);
    };
  }, [timerValue, isStarted]);

  return (
    <div className={`${isStarted ? 'opacity-100' : 'opacity-0'} absolute -top-10 left-0 w-fit h-fit transition-all duration-300`}>
      <Typography color="text-emerald-500" size="2xl">
        {timerValue}
      </Typography>
    </div>
  );
};
