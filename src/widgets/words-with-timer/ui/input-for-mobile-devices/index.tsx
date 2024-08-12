import { setCursorPosition, setIsStarted, setUserInput } from '@/entities';
import { useAppDispatch, useAppSelector } from '@/shared';

export const InputForMobileDevices = () => {
  const userInput = useAppSelector((state) => state.words.userInput);
  const dispatch = useAppDispatch();

  return (
    <input
      autoCapitalize="none"
      value={userInput}
      onChange={(e) => {
        dispatch(setIsStarted(true));
        dispatch(setUserInput(e.target.value));
        dispatch(setCursorPosition(e.target.value.length));
      }}
      className="w-full h-full z-10 opacity-0 lowercase"
    />
  );
};
