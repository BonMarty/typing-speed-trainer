import { Typography, useAppSelector } from '@/shared';

export const Words = () => {
  const generatedWords = useAppSelector((state) => state.words.generatedWords);
  const top = useAppSelector((state) => state.words.top);

  return (
    <Typography color="text-gray-500" size="2xl" className="absolute left-0 right-0 h-fit transition-all duration-300" style={{ top }}>
      {generatedWords}
    </Typography>
  );
};
