import { setUserInput } from '@/entities';
import { useAppDispatch, useAppSelector } from '@/shared';

export const InputForMobileDevices = () => {
  const userInput = useAppSelector((state) => state.words.userInput);
  const dispatch = useAppDispatch();

  return <input value={userInput} onChange={(e) => dispatch(setUserInput(e.target.value))} className="w-full h-full z-10 opacity-0 lowercase" />;
};
