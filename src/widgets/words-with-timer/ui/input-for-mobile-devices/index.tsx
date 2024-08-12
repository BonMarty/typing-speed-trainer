import { useAppSelector } from '@/shared';

export const InputForMobileDevices = () => {
  const userInput = useAppSelector((state) => state.words.userInput);

  return <input value={userInput} onChange={() => {}} className="w-full h-full z-10 opacity-0" />;
};
