import { FC } from 'react';
import { useThemeColorContext } from '../../contexts/ThemeContext';

export interface CardProps {
    variant?: 'light' | 'dark';
}

const Card: FC<CardProps> = ({ children, variant = 'dark' }) => {
  const theme = useThemeColorContext();

  const backgroundColor = variant === 'dark' ? theme.bg600 : 'bg-white';

  return (
    <div className={`rounded-xl shadow-xl ${backgroundColor} flex items-center justify-center w-full h-full`}>
      {children}
    </div>
  );
};

export default Card;
