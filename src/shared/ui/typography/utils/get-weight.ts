import { TextWeight } from '../ui/types';

export const getWeight = (weight: TextWeight | undefined) => {
  if (!weight) return 'font-regular';

  if (weight === 'regular') return 'font-regular';
  if (weight === 'medium') return 'font-medium';
  if (weight === 'semibold') return 'font-semibold';
  if (weight === 'bold') return 'font-bold';
};
