import { FC } from 'react';

export interface CardProps {
    variant?: 'light' | 'dark';
}

const Card: FC<CardProps> = ({ children, variant = 'dark' }) => {
  const backgroundColor = variant === 'dark' ? 'bg-indigo-500' : 'bg-white';

  return (
    <div className={`rounded-xl shadow-xl ${backgroundColor} flex items-center justify-center w-full h-full`}>
      {children}
    </div>
  );
};

export default Card;
