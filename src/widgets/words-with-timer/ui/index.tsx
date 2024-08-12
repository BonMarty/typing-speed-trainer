import { Timer, Words } from '@/entities';
import { ChangeTimeLimit, UserTypings } from '@/features';
import { useAppSelector } from '@/shared';
import React from 'react';

export const WordsWithTimer = () => {
  const timeLimit = useAppSelector((state) => state.timer.timeLimit);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <ChangeTimeLimit />
      <div className="flex-1 flex items-center w-full">
        <div className="relative flex flex-col gap-10 w-full">
          <Timer value={timeLimit} />
          <div className="relative font-mono h-32 overflow-hidden" onClick={onClick}>
            <Words />
            <UserTypings />
            <input className="hidden" ref={inputRef} />
          </div>
        </div>
      </div>
    </>
  );
};
