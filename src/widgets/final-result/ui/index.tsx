import { Typography } from '@/shared';
import { useErrors, useWpm } from '../hooks';

export const FinalResult = () => {
  const { wpm } = useWpm();
  const { errors } = useErrors();

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-8 font-mono">
      <Typography size="xl" color="text-gray-400">
        Results
      </Typography>
      <div className="space-y-2">
        <Typography size="xl" color="text-gray-400">
          WPM
        </Typography>
        <Typography size="5xl" color="text-emerald-500" weight="medium">
          {wpm}
        </Typography>
      </div>
      <div className="space-y-2">
        <Typography size="xl" color="text-gray-400">
          Errors
        </Typography>
        <Typography size="5xl" color="text-emerald-500" weight="medium">
          {errors.current}
        </Typography>
      </div>
    </div>
  );
};
