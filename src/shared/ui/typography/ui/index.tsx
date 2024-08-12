import { getSize, getWeight } from '../utils';
import { TextProps } from './types';

export const Typography = (props: TextProps) => {
  const { children, color, size, weight, className, ...rest } = props;

  const textColor = color ? color : 'text-white';
  const textSize = getSize(size);
  const textWeight = getWeight(weight);

  if (className) {
    return (
      <p className={`${textColor} ${textSize} ${textWeight} drop-shadow transition-all duration-300 ${className}`} {...rest}>
        {children}
      </p>
    );
  }

  return (
    <p className={`${textColor} ${textSize} ${textWeight} drop-shadow transition-all duration-300`} {...rest}>
      {children}
    </p>
  );
};
