import { TextSize } from '../ui/types';

export const getSize = (size: TextSize | undefined) => {
  if (!size) return 'text-base';

  if (size === 'lg') return 'text-lg';
  if (size === 'xl') return 'text-xl';
  if (size === '2xl') return 'text-2xl';
  if (size === '3xl') return 'text-3xl';
  if (size === '4xl') return 'text-4xl';
  if (size === '5xl') return 'text-5xl';
};
