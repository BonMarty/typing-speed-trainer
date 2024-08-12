import { Timer, Words } from '@/entities';
import { ChangeTimeLimit, UserTypings } from '@/features';
import { useAppSelector } from '@/shared';
import { InputForMobileDevices } from './input-for-mobile-devices';

export const WordsWithTimer = () => {
  const timeLimit = useAppSelector((state) => state.timer.timeLimit);

  return (
    <>
      <ChangeTimeLimit />
      <div className="flex-1 flex items-center w-full">
        <div className="relative flex flex-col gap-10 w-full">
          <Timer value={timeLimit} />
          <div className="relative font-mono h-32 overflow-hidden">
            <Words />
            <UserTypings />
            <InputForMobileDevices />
          </div>
        </div>
      </div>
    </>
  );
};
