import { FC } from 'react';
import { useThemeColorContext } from '../../contexts/ThemeContext';

export interface CardProps {
  variant?: 'light' | 'dark';
  withBorder?: boolean;
}

const Card: FC<CardProps> = ({ children, variant = 'dark', withBorder = false }) => {
  const theme = useThemeColorContext();

  const backgroundColor = variant === 'dark' ? theme.bg600 : 'bg-white';
  const borderColor = variant === 'dark' ? 'border-white' : theme.borderDark;

  return (
    <div className={`rounded-xl shadow-xl ${backgroundColor} ${withBorder ? 'border-b-8' : ''} ${borderColor} flex items-center justify-center w-full h-full`}>
      {children}
    </div>
  );
};

export default Card;
